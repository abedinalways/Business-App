'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ForgotPasswordFrom() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    // Validation
    if (!email) {
      toast.error('Please enter your email address');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email as string)) {
      toast.error('Please enter a valid email address');
      setLoading(false);
      return;
    }

    const loadingToast = toast.loading('Sending reset instructions...');

    try {
      const apiFormData = new FormData();
      apiFormData.append('email', email);

      const response = await fetch(
        'https://apitest.softvencefsd.xyz/api/forgot-password',
        {
          method: 'POST',
          body: apiFormData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success('Password reset instructions sent to your email!', {
          id: loadingToast,
        });
        router.push(
          `/ForgotPass/verify?email=${encodeURIComponent(email as string)}`
        );
      } else {
        let errorMessage = 'Failed to send reset instructions';

        if (result.message) {
          errorMessage = result.message;
        } else if (result.errors?.email) {
          errorMessage = result.errors.email[0];
        }

        toast.error(errorMessage, { id: loadingToast });
      }
    } catch (error) {
      console.error('Reset password error:', error);
      toast.error('Network error. Please try again.', { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      {/* Email */}
      <input
        type="email"
        name="email"
        disabled={loading}
        suppressHydrationWarning
        className="flex-1 outline-1 outline-[#919EAB]/32 w-full min-h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
        placeholder="Email address"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-[#49AE44] text-white font-bold rounded-lg hover:bg-[#3e8e3a] transition-colors duration-200 mb-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#49AE44]"
      >
        {loading ? 'Sending...' : 'Reset Password'}
      </button>
    </form>
  );
}
