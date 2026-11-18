import assert from 'node:assert';
import { enquirySchema, contactSchema, sanitizeInput } from '../src/lib/validations.ts';

console.log('Testing XSS sanitization...');
assert.strictEqual(sanitizeInput('Hello <script>alert(1)</script> World'), 'Hello  World');
assert.strictEqual(sanitizeInput('<b>Bold</b> name'), 'Bold name');
console.log('✓ XSS sanitization passed');

console.log('Testing enquirySchema with valid input...');
const validEnquiry = {
  parentName: 'Kasun Perera',
  contactNumber: '071 960 6126',
  email: 'kasun@example.com',
  childName: 'Senuri Perera',
  childAge: '3 years',
  desiredYear: '2026',
  preferredContact: 'phone',
  message: 'Looking for morning session.',
};
const enquiryResult = enquirySchema.safeParse(validEnquiry);
assert.strictEqual(enquiryResult.success, true);
console.log('✓ enquirySchema valid test passed');

console.log('Testing enquirySchema with invalid phone...');
const invalidEnquiry = {
  ...validEnquiry,
  contactNumber: '123',
};
const invalidResult = enquirySchema.safeParse(invalidEnquiry);
assert.strictEqual(invalidResult.success, false);
console.log('✓ enquirySchema rejection test passed');

console.log('Testing contactSchema with valid input...');
const validContact = {
  name: 'Nimal Silva',
  phone: '+94719606126',
  subject: 'General Question',
  message: 'What are the required documents for admission?',
};
const contactResult = contactSchema.safeParse(validContact);
assert.strictEqual(contactResult.success, true);
console.log('✓ contactSchema valid test passed');

console.log('Testing Geo-IP language resolution rules...');
function resolveLanguageFromCountry(country, acceptLanguage) {
  if (country && country.toUpperCase() === 'LK') return 'si';
  if (country && country.toUpperCase() !== 'LK') return 'en';
  if (acceptLanguage && acceptLanguage.toLowerCase().includes('si')) return 'si';
  return 'en';
}

assert.strictEqual(resolveLanguageFromCountry('LK'), 'si');
assert.strictEqual(resolveLanguageFromCountry('lk'), 'si');
assert.strictEqual(resolveLanguageFromCountry('US'), 'en');
assert.strictEqual(resolveLanguageFromCountry('GB'), 'en');
assert.strictEqual(resolveLanguageFromCountry('AU'), 'en');
assert.strictEqual(resolveLanguageFromCountry('', 'si-LK,si;q=0.9'), 'si');
assert.strictEqual(resolveLanguageFromCountry('', 'en-US,en;q=0.9'), 'en');
console.log('✓ Geo-IP language resolution rules passed');

console.log('All automated validation tests passed successfully!');
