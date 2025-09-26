'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
  email: string;
}

export default function RegisterVerify({ email }: Props) {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const handleChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return;
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const verificationCode = codes.join('');
    if (verificationCode.length !== 6) {
      toast.error('Please enter 6-digit code');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        'https://apitest.softvencefsd.xyz/api/verify_otp',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, otp: verificationCode }),
        }
      );
      const result = await res.json();
      if (res.ok) {
        toast.success('Account verified successfully!');
        setTimeout(() => router.push('/Register/verify/success'), 500);
      } else {
        toast.error(result.message || 'Verification failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;
    try {
      const res = await fetch(
        'https://apitest.softvencefsd.xyz/api/resend_otp',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );
      if (res.ok) {
        toast.success('OTP resent successfully!');
        setResendCooldown(30);
      } else {
        toast.error('Failed to resend OTP');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  useEffect(() => {
    if (resendCooldown === 0) return;
    const timer = setInterval(() => setResendCooldown(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  return (
    <div className="mt-10 max-w-md mx-auto text-center">
      <Toaster position="top-center" />
      <h2 className="text-xl font-bold mb-2">Verify Your Account</h2>
      <p className="text-gray-600 mb-6">
        Enter the 6-digit code sent to{' '}
        <span className="font-semibold">{email}</span>
      </p>
      <div className="flex justify-center space-x-3 mb-6">
        {codes.map((code, index) => (
          <input
            key={index}
            ref={el => {
              inputRefs.current[index] = el;
            }} // ✅ FIXED: explicit void return
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={code}
            onChange={e => handleChange(index, e.target.value)}
            onKeyDown={e => handleKeyDown(index, e)}
            className="w-14 h-14 text-2xl font-semibold text-center border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#49AE44] focus:border-[#49AE44] transition-colors duration-200"
            aria-label={`Digit ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handleVerify}
        disabled={loading}
        className={`w-full py-3 bg-[#49AE44] text-white font-bold rounded-lg mb-4 transition-colors duration-200 ${
          loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3e8e3a]'
        }`}
      >
        {loading ? 'Verifying...' : 'Verify'}
      </button>

      <p className="text-sm text-gray-600">
        Didn&apos;t receive code?{' '}
        <button
          onClick={handleResend}
          disabled={resendCooldown > 0}
          className={`text-[#49AE44] font-semibold hover:underline ${
            resendCooldown > 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend code'}
        </button>
      </p>
    </div>
  );
}
