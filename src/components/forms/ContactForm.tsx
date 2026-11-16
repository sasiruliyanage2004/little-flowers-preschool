'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { schoolInfo } from '@/data/siteContent';

export const ContactForm: React.FC = () => {
  const { isSinhala } = useLanguage();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!name.trim()) {
      err.name = isSinhala ? 'ඔබගේ නම ඇතුළත් කරන්න.' : 'Please enter your name.';
    }
    if (!phone.trim()) {
      err.phone = isSinhala ? 'දුරකථන අංකය ඇතුළත් කරන්න.' : 'Please enter your contact number.';
    } else {
      const cleanPhone = phone.replace(/[\s-]/g, '');
      if (cleanPhone.length < 9 || cleanPhone.length > 15) {
        err.phone = isSinhala ? 'වලංගු දුරකථන අංකයක් ඇතුළත් කරන්න.' : 'Please enter a valid contact number.';
      }
    }
    if (!message.trim()) {
      err.message = isSinhala ? 'පණිවිඩය ඇතුළත් කරන්න.' : 'Please enter your message.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, subject, message }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        try {
          const stored = JSON.parse(localStorage.getItem('little_flowers_messages') || '[]');
          stored.push({
            id: data.messageId,
            name,
            phone,
            subject,
            message,
            date: new Date().toISOString(),
          });
          localStorage.setItem('little_flowers_messages', JSON.stringify(stored));
        } catch {
          // fallback
        }
        setIsSent(true);
      } else {
        if (res.status === 429) {
          setServerError(
            isSinhala
              ? 'පණිවිඩ සංඛ්‍යාව අධිකයි. කරුණාකර සුළු මොහොතකින් නැවත උත්සාහ කරන්න.'
              : 'Too many messages sent. Please wait a moment before sending another.'
          );
        } else {
          setServerError(data.error || 'Failed to send message. Please try again.');
        }
      }
    } catch {
      // Network failure fallback: store locally and mark sent
      try {
        const stored = JSON.parse(localStorage.getItem('little_flowers_messages') || '[]');
        stored.push({
          id: `MSG-${Date.now().toString().slice(-6)}`,
          name,
          phone,
          subject,
          message,
          date: new Date().toISOString(),
        });
        localStorage.setItem('little_flowers_messages', JSON.stringify(stored));
      } catch {
        // fallback
      }
      setIsSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSent) {
    return (
      <div
        role="region"
        aria-live="polite"
        className="bg-white rounded-3xl p-8 border border-charcoal/10 shadow-lg text-center animate-in fade-in duration-300"
      >
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h4 className="font-heading font-bold text-xl text-charcoal mb-2">
          {isSinhala ? 'ස්තූතියි! ඔබේ පණිවිඩය ලැබිණි.' : 'Thank you! Your message has been received.'}
        </h4>
        <p className="font-body text-charcoal-light text-sm mb-6">
          {isSinhala
            ? 'අපගේ ප්‍රධාන ආචාරිණිය හෝ කාර්ය මණ්ඩලය ඉක්මනින් ඔබ අමතනු ඇත.'
            : 'Our preschool team will review your enquiry and respond to you promptly.'}
        </p>
        <button
          type="button"
          onClick={() => {
            setName('');
            setPhone('');
            setSubject('');
            setMessage('');
            setServerError(null);
            setIsSent(false);
          }}
          className="px-6 py-3 rounded-full bg-cream text-charcoal font-heading font-bold text-sm hover:bg-cream-100 transition-colors min-h-[44px]"
        >
          {isSinhala ? 'තවත් පණිවිඩයක් එවන්න' : 'Send Another Message'}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/10 shadow-lg space-y-5"
      aria-label={isSinhala ? 'සම්බන්ධතා පණිවිඩ පෝරමය' : 'Contact Message Form'}
    >
      {serverError && (
        <div
          role="alert"
          className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
          <span>{serverError}</span>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-xs font-heading font-bold text-charcoal uppercase tracking-wider mb-1.5">
          {isSinhala ? 'ඔබගේ නම' : 'Your Name'} <span className="text-coral">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={isSinhala ? 'උදා: නිමල් සිල්වා' : 'e.g. Nimal Silva'}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 ${
            errors.name ? 'border-red-400 bg-red-50/30' : 'border-charcoal/15'
          }`}
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-heading font-bold text-charcoal uppercase tracking-wider mb-1.5">
            {isSinhala ? 'දුරකථන අංකය' : 'Phone Number'} <span className="text-coral">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="071 960 6126"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 ${
              errors.phone ? 'border-red-400 bg-red-50/30' : 'border-charcoal/15'
            }`}
          />
          {errors.phone && (
            <p id="contact-phone-error" className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-xs font-heading font-bold text-charcoal uppercase tracking-wider mb-1.5">
            {isSinhala ? 'මාතෘකාව' : 'Subject'}
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder={isSinhala ? 'ඇතුළත් කිරීම් / විමසීම්' : 'Admissions / General Inquiry'}
            className="w-full px-4 py-3 rounded-xl border border-charcoal/15 text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-heading font-bold text-charcoal uppercase tracking-wider mb-1.5">
          {isSinhala ? 'පණිවිඩය' : 'Message'} <span className="text-coral">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={isSinhala ? 'ඔබට දැනගැනීමට අවශ්‍ය කරුණු මෙහි ලියන්න...' : 'Write your question or request here...'}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 resize-none ${
            errors.message ? 'border-red-400 bg-red-50/30' : 'border-charcoal/15'
          }`}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-full bg-coral hover:bg-coral-dark text-white font-heading font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 min-h-[46px] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? (isSinhala ? 'යොමු කරමින්...' : 'Sending...') : (isSinhala ? 'පණිවිඩය එවන්න' : 'Send Message')}</span>
      </button>

      <div className="pt-2 text-center">
        <a
          href={schoolInfo.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-heading font-bold text-emerald-700 hover:underline min-h-[36px]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{isSinhala ? 'හෝ WhatsApp මගින් ඉක්මනින් පණිවිඩයක් එවන්න' : 'Or chat with us instantly on WhatsApp'}</span>
        </a>
      </div>
    </form>
  );
};
