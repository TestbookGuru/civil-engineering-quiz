import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { sound } from '../utils/sound';
import { User, Phone, Mail, Award, CheckCircle2, X } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (profile: UserProfile) => Promise<void>;
  initialProfile: UserProfile;
}

export const SignupModal: React.FC<SignupModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialProfile,
}) => {
  const [name, setName] = useState(initialProfile.name || '');
  const [phone, setPhone] = useState(initialProfile.phone || '');
  const [email, setEmail] = useState(initialProfile.email || '');
  const [phoneError, setPhoneError] = useState<string>('');
  const [submitError, setSubmitError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setName(initialProfile.name || '');
      setPhone(initialProfile.phone || '');
      setEmail(initialProfile.email || '');
      setPhoneError('');
      setSubmitError('');
      setIsSubmitting(false);
    }
  }, [isOpen, initialProfile]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clean phone number
    const cleanedPhone = phone.replace(/[^0-9]/g, '');
    if (cleanedPhone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    setPhoneError('');

    sound.buttonClick();
    const prof: UserProfile = {
      name: name.trim(),
      phone: cleanedPhone,
      email: email.trim().toLowerCase(),
    };

    setSubmitError('');
    setIsSubmitting(true);
    try {
      await onSubmit(prof);
    } catch (error) {
      console.error('Unable to save quiz lead:', error);
      setSubmitError('Unable to save your details right now. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal active fixed inset-0 z-50 grid place-items-center p-4 overflow-y-auto select-none">
      {/* ======================================================== */}
      {/* SOOTHING COOL FROSTED GLASS BACKGROUND                  */}
      {/* ======================================================== */}
      <div
        className="fixed inset-0 backdrop-blur-xl bg-slate-950/65 transition-all duration-500 pointer-events-auto"
        onClick={onClose}
      >
        {/* Soft soothing cyan/ice ambient glow orb */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-cyan-400/20 blur-[90px] pointer-events-none" />
        {/* Calming deep oceanic blue ambient glow orb */}
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[420px] h-[420px] rounded-full bg-sky-500/25 blur-[100px] pointer-events-none" />
      </div>

      {/* ======================================================== */}
      {/* BRIGHT COLOR POPUP BOX                                   */}
      {/* ======================================================== */}
      <div className="signup-card relative w-full max-w-[460px] my-auto bg-gradient-to-b from-white via-sky-50/60 to-amber-50/70 border-3 border-amber-400 rounded-2xl shadow-[0_25px_60px_-15px_rgba(255,183,3,0.45),0_0_30px_rgba(32,231,255,0.25)] p-6 sm:p-7 text-slate-900 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Dismiss Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Bright Safety Yellow / Amber Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-[11px] font-black tracking-wider uppercase shadow-sm">
          <Award className="w-3.5 h-3.5 text-slate-900" />
          <span>Student Scorecard Access</span>
        </div>

        {/* Modal Title in Bright, Bold Slate-900 */}
        <div className="signup-title text-2xl sm:text-[26px] font-black text-slate-900 mt-2.5 tracking-tight leading-tight">
          Unlock Your Scorecard
        </div>

        {/* Subtitle with cool clarity */}
        <div className="signup-copy text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed font-medium">
          Enter your details below to instantly view your official Civil Engineering performance breakdown, ranking, and step-by-step solutions:
        </div>

        <form onSubmit={handleSubmit} id="signupForm" className="signup-form mt-5 space-y-3.5">
          {/* Full Name Field */}
          <div className="form-group text-left">
            <label
              htmlFor="nameInput"
              className="flex items-center gap-1.5 text-xs font-black text-slate-800 uppercase tracking-wider mb-1"
            >
              <User className="w-3.5 h-3.5 text-amber-500" />
              FULL NAME <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="nameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
              autoComplete="name"
              placeholder="e.g. Rahul Sharma"
              className="w-full text-slate-900 bg-white border-2 border-sky-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-400/20 p-2.5 rounded-xl text-sm font-semibold outline-none transition-all placeholder:text-slate-400 shadow-sm"
            />
          </div>

          {/* Mobile Number Field */}
          <div className="form-group text-left">
            <label
              htmlFor="phoneInput"
              className="flex items-center gap-1.5 text-xs font-black text-slate-800 uppercase tracking-wider mb-1"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              MOBILE NUMBER <span className="text-rose-500">*</span>
            </label>
            <div className="flex shadow-sm rounded-xl overflow-hidden border-2 border-sky-200 focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-400/20 transition-all">
              <span className="inline-flex items-center px-3.5 text-xs font-black text-amber-900 bg-amber-100 border-r border-sky-200">
                +91
              </span>
              <input
                type="tel"
                id="phoneInput"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (phoneError) setPhoneError('');
                }}
                required
                maxLength={12}
                autoComplete="tel"
                placeholder="9876543210"
                className="w-full text-slate-900 bg-white p-2.5 text-sm font-semibold outline-none placeholder:text-slate-400"
              />
            </div>
            {phoneError && (
              <p className="text-[11px] text-rose-500 font-bold mt-1">
                {phoneError}
              </p>
            )}
          </div>

          {/* Email Address Field */}
          <div className="form-group text-left">
            <label
              htmlFor="emailInput"
              className="flex items-center gap-1.5 text-xs font-black text-slate-800 uppercase tracking-wider mb-1"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              EMAIL ADDRESS <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="e.g. rahul@example.com"
              className="w-full text-slate-900 bg-white border-2 border-sky-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-400/20 p-2.5 rounded-xl text-sm font-semibold outline-none transition-all placeholder:text-slate-400 shadow-sm"
            />
          </div>

          {/* Bright Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="signup-submit w-full py-3.5 px-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 hover:from-yellow-300 hover:to-orange-400 disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 font-black text-sm tracking-wide rounded-xl shadow-[0_12px_24px_-4px_rgba(245,158,11,0.55)] cursor-pointer transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-amber-300"
            >
              {isSubmitting ? 'Loading Score' : 'Check Your Score'}
            </button>
            {submitError && (
              <p className="text-center text-[11px] text-rose-600 font-bold mt-2">
                {submitError}
              </p>
            )}
          </div>

          {/* Bright Features / Assurance Badges */}
          <div className="flex items-center justify-center gap-3 pt-2 text-[11px] font-bold text-slate-600">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant Score</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Solutions</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Free PDF Notes</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
