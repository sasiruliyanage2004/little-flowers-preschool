import { NextRequest, NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validations';
import { rateLimit } from '@/lib/rateLimit';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'anonymous';
    const limiter = rateLimit(ip, 8, 60000); // Max 8 enquiries per minute per IP

    if (!limiter.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait before submitting another enquiry.',
          retryAfter: limiter.reset,
        },
        {
          status: 429,
          headers: {
            'Retry-After': limiter.reset.toString(),
            'X-RateLimit-Limit': '8',
            'X-RateLimit-Remaining': '0',
          },
        }
      );
    }

    // 2. Parse & Validate Payload
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON payload received.' },
        { status: 400 }
      );
    }

    const validationResult = enquirySchema.safeParse(body);

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.format();
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please review the highlighted fields.',
          details: formattedErrors,
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;

    // 3. Generate Reference ID
    const referenceId = `ENQ-${Date.now().toString().slice(-6)}`;
    const timestamp = new Date().toISOString();

    // In production, an email/webhook or database insert can be triggered securely here.
    // Child and parent data is validated, sanitized, and safely isolated.

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: 'Enquiry received successfully. Our admissions team will get in touch.',
        timestamp,
        data: {
          parentName: validData.parentName,
          childName: validData.childName,
          desiredYear: validData.desiredYear,
          preferredContact: validData.preferredContact,
        },
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': '8',
          'X-RateLimit-Remaining': limiter.remaining.toString(),
        },
      }
    );
  } catch (err) {
    console.error('Unhandled enquiry API error:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal error occurred while processing your enquiry. Please contact us directly via phone or WhatsApp.',
      },
      { status: 500 }
    );
  }
}
