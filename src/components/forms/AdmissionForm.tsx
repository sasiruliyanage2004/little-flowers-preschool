'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageCircle, Mail, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AdmissionFormValues } from '@/types';
import { schoolInfo } from '@/data/siteContent';

export const AdmissionForm: React.FC = () => {
  const { t, isSinhala } = useLanguage();
  const f = t.admissionsPage.formFields;

  const currentYear = new Date().getFullYear();
  const yearOptions = [currentYear.toString(), (currentYear + 1).toString(), (currentYear + 2).toString()];

  const [values, setValues] = useState<AdmissionFormValues>({
    parentName: '',
    contactNumber: '',
    email: '',
    childName: '',
    childAge: '',
    desiredYear: yearOptions[0],
    preferredContact: 'phone',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AdmissionFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');

  const validate = () => {
    const newErrors: Partial<Record<keyof AdmissionFormValues, string>> = {};

    if (!values.parentName.trim()) {
      newErrors.parentName = isSinhala
        ? 'දෙමාපිය / භාරකරුගේ නම ඇතුළත් කිරීම අනිවාර්යයි.'
        : 'Parent or guardian name is required.';
    }

    if (!values.contactNumber.trim()) {
      newErrors.contactNumber = isSinhala
        ? 'සම්බන්ධතා දුරකථන අංකය ඇතුළත් කිරීම අනිවාර්යයි.'
        : 'Contact phone number is required.';
    } else {
      // Basic phone check (allowing Sri Lankan 10 digit, +94, or standard phone characters)
      const cleanPhone = values.contactNumber.replace(/[\s-]/g, '');
      if (cleanPhone.length < 9 || cleanPhone.length > 15) {
        newErrors.contactNumber = isSinhala
          ? 'වලංගු දුරකථන අංකයක් ඇතුළත් කරන්න (උදා: 071 960 6126).'
          : 'Please enter a valid phone number (e.g. 071 960 6126).';
      }
    }

    if (values.email && values.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email.trim())) {
        newErrors.email = isSinhala
          ? 'වලංගු විද්‍යුත් තැපැල් ලිපිනයක් ඇතුළත් කරන්න.'
          : 'Please enter a valid email address.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable local storage logging & verification
    setTimeout(() => {
      const newId = `ENQ-${Date.now().toString().slice(-6)}`;
      setSubmissionId(newId);

      try {
        const stored = JSON.parse(localStorage.getItem('little_flowers_enquiries') || '[]');
        stored.push({
          id: newId,
          ...values,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('little_flowers_enquiries', JSON.stringify(stored));
      } catch {
        // storage fallback
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setValues({
      parentName: '',
      contactNumber: '',
      email: '',
      childName: '',
      childAge: '',
      desiredYear: yearOptions[0],
      preferredContact: 'phone',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-4xl p-8 sm:p-10 border border-charcoal/10 shadow-xl text-center max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full bg-cream text-charcoal-muted text-xs font-mono font-bold mb-3">
          Reference: {submissionId}
        </span>

        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-4">
          {f.successTitle}
        </h3>

        <p className="text-charcoal-light font-body text-base leading-relaxed mb-6">
          {f.successMessage}
        </p>

        <div className="p-4 rounded-2xl bg-cream-50 border border-charcoal/5 text-left text-xs sm:text-sm space-y-1.5 mb-8">
          <div><strong className="text-charcoal">{isSinhala ? 'දෙමාපිය නම:' : 'Parent Name:'}</strong> {values.parentName}</div>
          <div><strong className="text-charcoal">{isSinhala ? 'දුරකථන අංකය:' : 'Contact:'}</strong> {values.contactNumber}</div>
          {values.childName && <div><strong className="text-charcoal">{isSinhala ? 'දරුවාගේ නම:' : 'Child:'}</strong> {values.childName}</div>}
          <div><strong className="text-charcoal">{isSinhala ? 'වසර:' : 'Admission Year:'}</strong> {values.desiredYear}</div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/94719606126?text=${encodeURIComponent(
              `Hello Little Flowers Preschool, I just submitted enquiry ${submissionId} for ${values.parentName} (Child: ${values.childName || 'Not specified'}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md transition-all transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isSinhala ? 'WhatsApp ඔස්සේ තහවුරු කරන්න' : 'Confirm via WhatsApp'}</span>
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream text-charcoal hover:bg-cream-100 font-heading font-bold text-sm border border-charcoal/10 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{f.submitAnother}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-4xl p-6 sm:p-10 border border-charcoal/10 shadow-xl max-w-2xl mx-auto"
    >
      <div className="space-y-6">
        {/* Parent Name */}
        <div>
          <label className="block text-sm font-heading font-bold text-charcoal mb-2">
            {f.parentName} <span className="text-coral">*</span>
          </label>
          <input
            type="text"
            value={values.parentName}
            onChange={(e) => setValues({ ...values, parentName: e.target.value })}
            placeholder={f.parentNamePlaceholder}
            className={`w-full px-4 py-3 rounded-2xl border text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 transition-all ${
              errors.parentName ? 'border-red-400 bg-red-50/30' : 'border-charcoal/15'
            }`}
          />
          {errors.parentName && (
            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.parentName}</span>
            </p>
          )}
        </div>

        {/* Contact Phone & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-heading font-bold text-charcoal mb-2">
              {f.contactNumber} <span className="text-coral">*</span>
            </label>
            <input
              type="tel"
              value={values.contactNumber}
              onChange={(e) => setValues({ ...values, contactNumber: e.target.value })}
              placeholder={f.contactNumberPlaceholder}
              className={`w-full px-4 py-3 rounded-2xl border text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 transition-all ${
                errors.contactNumber ? 'border-red-400 bg-red-50/30' : 'border-charcoal/15'
              }`}
            />
            {errors.contactNumber && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.contactNumber}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-heading font-bold text-charcoal mb-2">
              {f.email}
            </label>
            <input
              type="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              placeholder={f.emailPlaceholder}
              className={`w-full px-4 py-3 rounded-2xl border text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 transition-all ${
                errors.email ? 'border-red-400 bg-red-50/30' : 'border-charcoal/15'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Child's Name & Age */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-heading font-bold text-charcoal mb-2">
              {f.childName}
            </label>
            <input
              type="text"
              value={values.childName}
              onChange={(e) => setValues({ ...values, childName: e.target.value })}
              placeholder={f.childNamePlaceholder}
              className="w-full px-4 py-3 rounded-2xl border border-charcoal/15 text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-heading font-bold text-charcoal mb-2">
              {f.childAge}
            </label>
            <input
              type="text"
              value={values.childAge}
              onChange={(e) => setValues({ ...values, childAge: e.target.value })}
              placeholder={f.childAgePlaceholder}
              className="w-full px-4 py-3 rounded-2xl border border-charcoal/15 text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 transition-all"
            />
          </div>
        </div>

        {/* Admission Year & Contact Method */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-heading font-bold text-charcoal mb-2">
              {f.desiredYear}
            </label>
            <select
              value={values.desiredYear}
              onChange={(e) => setValues({ ...values, desiredYear: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-charcoal/15 text-sm font-heading font-semibold text-charcoal bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 transition-all"
            >
              {yearOptions.map((yr) => (
                <option key={yr} value={yr}>
                  {yr} {isSinhala ? 'වසර' : 'Academic Year'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-heading font-bold text-charcoal mb-2">
              {f.preferredContact}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setValues({ ...values, preferredContact: 'phone' })}
                className={`py-2.5 px-2 rounded-xl text-xs font-heading font-bold flex flex-col items-center justify-center gap-1 border transition-all ${
                  values.preferredContact === 'phone'
                    ? 'bg-coral text-white border-coral shadow-sm'
                    : 'bg-cream-50 text-charcoal-light border-charcoal/10 hover:bg-cream-100'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{isSinhala ? 'ඇමතුම්' : 'Phone'}</span>
              </button>

              <button
                type="button"
                onClick={() => setValues({ ...values, preferredContact: 'whatsapp' })}
                className={`py-2.5 px-2 rounded-xl text-xs font-heading font-bold flex flex-col items-center justify-center gap-1 border transition-all ${
                  values.preferredContact === 'whatsapp'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-cream-50 text-charcoal-light border-charcoal/10 hover:bg-cream-100'
                }`}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => setValues({ ...values, preferredContact: 'email' })}
                className={`py-2.5 px-2 rounded-xl text-xs font-heading font-bold flex flex-col items-center justify-center gap-1 border transition-all ${
                  values.preferredContact === 'email'
                    ? 'bg-coral text-white border-coral shadow-sm'
                    : 'bg-cream-50 text-charcoal-light border-charcoal/10 hover:bg-cream-100'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </button>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-heading font-bold text-charcoal mb-2">
            {f.message}
          </label>
          <textarea
            rows={3}
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            placeholder={f.messagePlaceholder}
            className="w-full px-4 py-3 rounded-2xl border border-charcoal/15 text-sm font-body bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-full bg-coral hover:bg-coral-dark text-white font-heading font-bold text-base shadow-lg shadow-coral/30 hover:shadow-xl hover:shadow-coral/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span>{f.submitting}</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{f.submitBtn}</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-charcoal-muted text-center font-body">
          🔒 {isSinhala
            ? 'ඔබගේ තොරතුරු රහසිගතව තබාගන්නා අතර, පෙරපාසල් ඇතුළත් කිරීම් කටයුතු සඳහා පමණක් භාවිතා කෙරේ.'
            : 'Your information is safely handled and used solely for Little Flowers preschool enrolment communication.'}
        </p>
      </div>
    </form>
  );
};
