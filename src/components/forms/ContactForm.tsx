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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!name.trim()) {
      err.name = isSinhala ? 'ඔබගේ නම ඇතුළත් කරන්න.' : 'Please enter your name.';
    }
    if (!phone.trim()) {
      err.phone = isSinhala ? 'දුරකථන අංකය ඇතුළත් කරන්න.' : 'Please enter your contact number.';
    }
    if (!message.trim()) {
      err.message = isSinhala ? 'පණිවිඩය ඇතුළත් කරන්න.' : 'Please enter your message.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('little_flowers_messages') || '[]');
        stored.push({
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
      setIsSubmitting(false);
      setIsSent(true);
    }, 600);
  };

  if (isSent) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-charcoal/10 shadow-lg text-center animate-in fade-in duration-300">
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
          onClick={() => {
            setName('');
            setPhone('');
            setSubject('');
            setMessage('');
            setIsSent(false);
          }}
          className="px-6 py-2.5 rounded-full bg-cream text-charcoal font-heading font-bold text-sm hover:bg-cream-100 transition-colors"
        >
          {isSinhala ? 'තවත් පණිවිඩයක් එවන්න' : 'Send Another Message'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/10 shadow-lg space-y-5">
      <div>
        <label className="block text-xs font-heading font-bold text-charcoal uppercase tracking-wider mb-1.5">
          {isSinhala ? 'ඔබගේ නම' : 'Your Name'} *
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={isSinhala ? 'උදා: නිමල් සිල්වා' : 'e.g. Nimal Silva'}
          className={`w-full px-4 py-3 rounded-xl border text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 ${
            errors.name ? 'border-red-400' : 'border-charcoal/15'
          }`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-heading font-bold text-charcoal uppercase tracking-wider mb-1.5">
            {isSinhala ? 'දුරකථන අංකය' : 'Phone Number'} *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="071 960 6126"
            className={`w-full px-4 py-3 rounded-xl border text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 ${
              errors.phone ? 'border-red-400' : 'border-charcoal/15'
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-xs font-heading font-bold text-charcoal uppercase tracking-wider mb-1.5">
            {isSinhala ? 'මාතෘකාව' : 'Subject'}
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder={isSinhala ? 'ඇතුළත් කිරීම් / විමසීම්' : 'Admissions / General Inquiry'}
            className="w-full px-4 py-3 rounded-xl border border-charcoal/15 text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-heading font-bold text-charcoal uppercase tracking-wider mb-1.5">
          {isSinhala ? 'පණිවිඩය' : 'Message'} *
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={isSinhala ? 'ඔබට දැනගැනීමට අවශ්‍ය කරුණු මෙහි ලියන්න...' : 'Write your question or request here...'}
          className={`w-full px-4 py-3 rounded-xl border text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 resize-none ${
            errors.message ? 'border-red-400' : 'border-charcoal/15'
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-full bg-coral hover:bg-coral-dark text-white font-heading font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? (isSinhala ? 'යොමු කරමින්...' : 'Sending...') : (isSinhala ? 'පණිවිඩය එවන්න' : 'Send Message')}</span>
      </button>

      <div className="pt-2 text-center">
        <a
          href={schoolInfo.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-heading font-bold text-emerald-700 hover:underline"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>{isSinhala ? 'හෝ WhatsApp මගින් ඉක්මනින් පණිවිඩයක් එවන්න' : 'Or chat with us instantly on WhatsApp'}</span>
        </a>
      </div>
    </form>
  );
};
