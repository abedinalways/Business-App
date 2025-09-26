'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import toast from 'react-hot-toast';

export default function UpdatePassword() {
  const [showPass, setShowPass] = useState(false);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = sessionStorage.getItem('resetToken');
      if (storedToken) setToken(storedToken);
    }
  }, []);

  const handlePassShowToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      toast.error('Reset token not found. Please try the reset process again.');
      return;
    }

    const formData = new FormData(e.currentTarget);

    // ✅ Cast safely to string
    const password = formData.get('password') as string | null;
    const confirmPassword = formData.get('confirmPassword') as string | null;

    // Validation
    if (!password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading('Updating password...');

    try {
      const apiFormData = new FormData();
      apiFormData.append('password', password);
      apiFormData.append('password_confirmation', confirmPassword);
      apiFormData.append('token', token);

      const response = await fetch(
        'https://apitest.softvencefsd.xyz/api/reset-password',
        {
          method: 'POST',
          body: apiFormData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success('Password updated successfully!', { id: loadingToast });

        if (typeof window !== 'undefined') {
          sessionStorage.removeItem('resetToken');
        }

        setTimeout(() => {
          router.push('/UpdatePassword/success');
        }, 2000);
      } else {
        let errorMessage = 'Failed to update password';

        if (result.message) {
          errorMessage = result.message;
        } else if (result.errors?.password) {
          errorMessage = result.errors.password[0];
        } else if (result.errors?.token) {
          errorMessage = 'Invalid or expired reset token. Please try again.';
        } else if (result.error) {
          errorMessage = result.error;
        }

        toast.error(errorMessage, { id: loadingToast });
      }
    } catch (error) {
      console.error('Update password error:', error);
      toast.error(
        'Network error. Please check your connection and try again.',
        { id: loadingToast }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-10">
      {/* Password */}
      <div className="relative">
        <input
          type={showPass ? 'text' : 'password'}
          name="password"
          placeholder="New Password"
          autoComplete="new-password"
          disabled={loading}
          suppressHydrationWarning
          className="outline-1 outline-[#919EAB]/32 w-full h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="button"
          onClick={handlePassShowToggle}
          disabled={loading}
          className="absolute right-4 top-4 text-[#637381] cursor-pointer hover:text-[#49AE44] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {showPass ? <IoIosEye size={24} /> : <IoMdEyeOff size={24} />}
        </button>
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <input
          type={showPass ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirm New Password"
          autoComplete="new-password"
          disabled={loading}
          suppressHydrationWarning
          className="outline-1 outline-[#919EAB]/32 w-full h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="button"
          onClick={handlePassShowToggle}
          disabled={loading}
          className="absolute right-4 top-4 text-[#637381] cursor-pointer hover:text-[#49AE44] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {showPass ? <IoIosEye size={24} /> : <IoMdEyeOff size={24} />}
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-[#49AE44] rounded-lg text-white font-bold cursor-pointer hover:bg-[#3e8e3a] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#49AE44] flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Updating...
          </>
        ) : (
          'Update Password'
        )}
      </button>
    </form>
  );
}
