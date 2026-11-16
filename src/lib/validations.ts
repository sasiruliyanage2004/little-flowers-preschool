import { z } from 'zod';

/**
 * Sanitizes input string to prevent stored or reflected XSS
 * Strips script tags and basic HTML entities
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim();
}

/**
 * Phone number validation regex
 * Accepts Sri Lankan numbers (071XXXXXXX, +9471XXXXXXX, 011XXXXXXX) and international formats
 */
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

export const enquirySchema = z.object({
  parentName: z
    .string()
    .min(2, { message: 'Parent or guardian name must be at least 2 characters.' })
    .max(100, { message: 'Name must not exceed 100 characters.' })
    .transform(sanitizeInput),
  contactNumber: z
    .string()
    .min(9, { message: 'Contact number must be at least 9 digits.' })
    .max(20, { message: 'Contact number cannot exceed 20 characters.' })
    .regex(phoneRegex, { message: 'Please enter a valid phone number (e.g., 071 960 6126).' })
    .transform(sanitizeInput),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' })
    .optional()
    .or(z.literal(''))
    .transform((val) => (val ? sanitizeInput(val) : '')),
  childName: z
    .string()
    .max(100, { message: 'Child name cannot exceed 100 characters.' })
    .optional()
    .or(z.literal(''))
    .transform((val) => (val ? sanitizeInput(val) : '')),
  childAge: z
    .string()
    .max(20, { message: 'Child age cannot exceed 20 characters.' })
    .optional()
    .or(z.literal(''))
    .transform((val) => (val ? sanitizeInput(val) : '')),
  desiredYear: z
    .string()
    .regex(/^\d{4}$/, { message: 'Desired academic year must be a valid 4-digit year.' }),
  preferredContact: z.enum(['phone', 'whatsapp', 'email'], {
    errorMap: () => ({ message: 'Please select a valid contact method.' }),
  }),
  message: z
    .string()
    .max(1000, { message: 'Message must not exceed 1,000 characters.' })
    .optional()
    .or(z.literal(''))
    .transform((val) => (val ? sanitizeInput(val) : '')),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must not exceed 100 characters.' })
    .transform(sanitizeInput),
  phone: z
    .string()
    .min(9, { message: 'Phone number must be at least 9 digits.' })
    .max(20, { message: 'Phone number cannot exceed 20 characters.' })
    .regex(phoneRegex, { message: 'Please enter a valid contact number.' })
    .transform(sanitizeInput),
  subject: z
    .string()
    .max(150, { message: 'Subject cannot exceed 150 characters.' })
    .optional()
    .or(z.literal(''))
    .transform((val) => (val ? sanitizeInput(val) : '')),
  message: z
    .string()
    .min(5, { message: 'Message must be at least 5 characters.' })
    .max(2000, { message: 'Message cannot exceed 2,000 characters.' })
    .transform(sanitizeInput),
});

export type ContactInput = z.infer<typeof contactSchema>;
