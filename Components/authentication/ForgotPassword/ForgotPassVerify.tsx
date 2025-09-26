'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function ForgotPassVerify() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const router = useRouter();

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return;

    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all codes are filled
    if (value && index === 5) {
      const allFilled = newCodes.every(code => code !== '');
      if (allFilled) {
        handleVerify();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace') {
      if (!codes[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'Enter') {
      if (codes.every(code => code !== '')) {
        handleVerify();
      }
    }
  };

  const handleVerify = async () => {
    const verificationCode = codes.join('');

    if (verificationCode.length !== 6) {
      toast.error('Please enter all 6 digits');
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading('Verifying code...');

    try {
      const formdata = new FormData();
      formdata.append('email', email);
      formdata.append('otp', verificationCode);

      const response = await fetch(
        'https://apitest.softvencefsd.xyz/api/forgot-verify-otp',
        {
          method: 'POST',
          body: formdata,
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success('Code verified successfully!', { id: loadingToast });
        sessionStorage.setItem('resetToken', result.data.token);
        router.push('/UpdatePassword');
      } else {
        // Clear the codes on error
        setCodes(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();

        let errorMessage = 'Verification failed';
        if (
          result.message?.includes('invalid') ||
          result.message?.includes('wrong')
        ) {
          errorMessage = 'Invalid verification code';
        } else if (result.message?.includes('expired')) {
          errorMessage = 'Verification code has expired';
        } else if (result.message) {
          errorMessage = result.message;
        }

        toast.error(errorMessage, { id: loadingToast });
      }
    } catch (error) {
      console.error('Verification error:', error);
      toast.error('Network error. Please try again.', { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      toast.error('Email address not found');
      return;
    }

    setResendLoading(true);
    const loadingToast = toast.loading('Sending new code...');

    try {
      const formdata = new FormData();
      formdata.append('email', email);

      const response = await fetch(
        'https://apitest.softvencefsd.xyz/api/resend_otp',
        {
          method: 'POST',
          body: formdata,
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success('New verification code sent!', { id: loadingToast });
        // Clear existing codes
        setCodes(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      } else {
        let errorMessage = 'Failed to resend code';
        if (result.message) {
          errorMessage = result.message;
        }
        toast.error(errorMessage, { id: loadingToast });
      }
    } catch (error) {
      console.error('Resend error:', error);
      toast.error('Network error. Please try again.', { id: loadingToast });
    } finally {
      setResendLoading(false);
    }
  };

  const allCodesFilled = codes.every(code => code !== '');

  return (
    <>
      <p className="text-[#637381]">
        We&apos;ve emailed a 6-digit confirmation code to{' '}
        <strong>{email}</strong>, please enter the code in below box to verify
        your email.
      </p>
      <div className="mt-10">
        {/* 6-Digit Input Fields */}
        <div className="flex justify-center space-x-3 mb-6">
          {codes.map((code, index) => (
            <input
              key={index}
              ref={el => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={code}
              disabled={loading}
              onChange={e => handleChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              onPaste={e => {
                e.preventDefault();
                const pasteData = e.clipboardData.getData('text');
                const numbers = pasteData
                  .replace(/\D/g, '')
                  .split('')
                  .slice(0, 6);
                if (numbers.length === 6) {
                  const newCodes = [...numbers];
                  setCodes(newCodes);
                  inputRefs.current[5]?.focus();
                }
              }}
              className="w-12 h-12 text-2xl font-semibold text-center border-2 border-gray-300 rounded-lg focus:border-[#49AE44] focus:outline-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          disabled={!allCodesFilled || loading}
          className="w-full py-3 bg-[#49AE44] text-white font-bold rounded-lg hover:bg-[#3e8e3a] transition-colors duration-200 mb-4 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer disabled:hover:bg-[#49AE44] flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Verifying...
            </>
          ) : (
            'Verify'
          )}
        </button>

        <p className="text-center text-sm text-gray-600">
          Didn&apos;t receive code?{' '}
          <button
            onClick={handleResendCode}
            disabled={resendLoading || loading}
            className="text-[#49AE44] font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {resendLoading ? 'Sending...' : 'Resend code'}
          </button>
        </p>
      </div>
    </>
  );
}
