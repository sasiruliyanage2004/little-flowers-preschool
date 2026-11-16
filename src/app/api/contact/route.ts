import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { rateLimit } from '@/lib/rateLimit';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'anonymous';
    const limiter = rateLimit(ip, 10, 60000); // Max 10 messages per minute per IP

    if (!limiter.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many messages sent. Please wait a moment before sending another.',
          retryAfter: limiter.reset,
        },
        {
          status: 429,
          headers: {
            'Retry-After': limiter.reset.toString(),
            'X-RateLimit-Limit': '10',
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

    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.format();
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please verify the contact information entered.',
          details: formattedErrors,
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;
    const messageId = `MSG-${Date.now().toString().slice(-6)}`;
    const timestamp = new Date().toISOString();

    return NextResponse.json(
      {
        success: true,
        messageId,
        message: 'Message delivered successfully.',
        timestamp,
        data: {
          name: validData.name,
          phone: validData.phone,
          subject: validData.subject,
        },
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': limiter.remaining.toString(),
        },
      }
    );
  } catch (err) {
    console.error('Unhandled contact API error:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal error occurred. Please contact us directly via phone or WhatsApp.',
      },
      { status: 500 }
    );
  }
}
