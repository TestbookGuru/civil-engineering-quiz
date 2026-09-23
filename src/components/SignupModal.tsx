import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { sound } from '../utils/sound';
import { User, Phone, Mail, LockKeyhole } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (profile: UserProfile) => void;
  initialProfile: UserProfile;
}

export const SignupModal: React.FC<SignupModalProps> = ({
  isOpen,
  onSubmit,
  initialProfile,
}) => {
  const [name, setName] = useState(initialProfile.name || '');
  const [phone, setPhone] = useState(initialProfile.phone || '');
  const [email, setEmail] = useState(initialProfile.email || '');
  const [phoneError, setPhoneError] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setName(initialProfile.name || '');
      setPhone(initialProfile.phone || '');
      setEmail(initialProfile.email || '');
      setPhoneError('');
    }
  }, [isOpen, initialProfile]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clean phone number
    const cleanedPhone = phone.replace(/[^0-9]/g, '');
    if (cleanedPhone.length < 10) {
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
    onSubmit(prof);
  };

  return (
    <div className="modal active fixed inset-0 z-50 grid place-items-center bg-[#021528]/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="modal-card w-full max-w-[440px] my-auto bg-gradient-to-b from-[#051c36] to-[#08294e] border-2 border-[#20e7ff] p-6 sm:p-7 rounded-lg shadow-2xl">
        <div className="flex items-center gap-1.5 text-[11px] font-black tracking-widest text-[#ffd43b] uppercase">
          <LockKeyhole className="w-3.5 h-3.5" />
          STUDENT SIGN IN REQUIRED
        </div>

        <div className="modal-title text-2xl font-black text-white mt-1">
          Unlock Your Scorecard
        </div>

        <div className="modal-copy text-xs text-sky-200 mt-1.5 leading-relaxed">
          To view your official performance scorecard, last 5 sessions progression graph, and complete question solutions, please provide your details.
        </div>

        <form onSubmit={handleSubmit} id="signupForm" className="mt-5 space-y-3.5">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="nameInput" className="flex items-center gap-1.5 text-xs font-bold text-sky-100 uppercase tracking-wider mb-1">
              <User className="w-3.5 h-3.5 text-[#20e7ff]" />
              FULL NAME <span className="text-amber-400">*</span>
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
              className="w-full text-white bg-[#031326] border border-[#20e7ff]/40 p-2.5 rounded text-sm outline-none focus:border-[#20e7ff] focus:ring-1 focus:ring-[#20e7ff]"
            />
          </div>

          {/* Mobile Number Field */}
          <div className="form-group">
            <label htmlFor="phoneInput" className="flex items-center gap-1.5 text-xs font-bold text-sky-100 uppercase tracking-wider mb-1">
              <Phone className="w-3.5 h-3.5 text-[#20e7ff]" />
              MOBILE NUMBER <span className="text-amber-400">*</span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-xs font-black text-sky-300 bg-[#072442] border border-r-0 border-[#20e7ff]/40 rounded-l">
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
                className="w-full text-white bg-[#031326] border border-[#20e7ff]/40 p-2.5 rounded-r text-sm outline-none focus:border-[#20e7ff] focus:ring-1 focus:ring-[#20e7ff]"
              />
            </div>
            {phoneError && (
              <p className="text-[11px] text-rose-400 font-semibold mt-1">
                {phoneError}
              </p>
            )}
          </div>

          {/* Email Address Field */}
          <div className="form-group">
            <label htmlFor="emailInput" className="flex items-center gap-1.5 text-xs font-bold text-sky-100 uppercase tracking-wider mb-1">
              <Mail className="w-3.5 h-3.5 text-[#20e7ff]" />
              EMAIL ADDRESS <span className="text-amber-400">*</span>
            </label>
            <input
              type="email"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="e.g. rahul@example.com"
              className="w-full text-white bg-[#031326] border border-[#20e7ff]/40 p-2.5 rounded text-sm outline-none focus:border-[#20e7ff] focus:ring-1 focus:ring-[#20e7ff]"
            />
          </div>

          <div className="modal-actions pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider rounded shadow-xl cursor-pointer transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              SIGN IN & VIEW SCORECARD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
