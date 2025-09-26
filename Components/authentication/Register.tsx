'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const router = useRouter();

  const handlePassShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleConfirmPassShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowConfirmPass(!showConfirmPass);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation'),
      terms: formData.get('terms') ? true : false,
    };

    try {
      const res = await fetch('https://apitest.softvencefsd.xyz/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        toast.success(
          'Registration successful! Check your email for verification code'
        );
        setTimeout(
          () => router.push(`/Register/verify?email=${data.email}`),
          800
        );
      } else {
        toast.error(result.message || '❌ Registration failed!');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 py-10">
      <form onSubmit={handleRegister} className="flex flex-col gap-5 mt-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <label className="absolute -top-2 left-3 bg-white px-1 text-[#919EAB] text-sm sm:text-base rounded-md">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
            />
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
          />
        </div>

        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
          />
          <button
            onClick={handlePassShow}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#637381] hover:text-[#49AE44] transition-colors duration-200"
          >
            {showPass ? <IoIosEye size={20} /> : <IoMdEyeOff size={20} />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showConfirmPass ? 'text' : 'password'}
            name="password_confirmation"
            placeholder="Confirm Password"
            className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
          />
          <button
            onClick={handleConfirmPassShow}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#637381] hover:text-[#49AE44] transition-colors duration-200"
          >
            {showConfirmPass ? (
              <IoIosEye size={20} />
            ) : (
              <IoMdEyeOff size={20} />
            )}
          </button>
        </div>

        <div className="flex sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <label className="flex items-center gap-2 cursor-pointer select-none text-sm sm:text-base">
            <input
              type="checkbox"
              name="terms"
              defaultChecked
              className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#49AE44] rounded-md checked:bg-[#49AE44] checked:border-[#49AE44] transition-colors cursor-pointer hover:border-[#49AE44]/80 hover:checked:bg-[#49AE44]/90"
            />
            I agree to Tech Takes Terms of Service and Privacy Policy.
          </label>
        </div>

        <input
          type="submit"
          value="create account"
          className="w-full py-3 sm:py-3.5 bg-[#49AE44] rounded-lg text-white font-bold cursor-pointer hover:bg-[#3e8e3a] transition-colors duration-200 text-sm sm:text-base"
        />
      </form>

      <div className="flex items-center mt-8 mb-5">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm sm:text-base">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <button className="w-full border border-[#919EAB]/32 py-3 sm:py-3.5 text-[#637381] flex justify-center items-center gap-3 rounded-lg cursor-pointer hover:border-[#49AE44]/50 hover:text-[#49AE44] transition-all duration-200 text-sm sm:text-base">
        <FcGoogle size={22} />
        Register with Google
      </button>

      <p className="mt-6 text-sm sm:text-base text-center text-[#212B36]">
        Already have an account?{' '}
        <Link
          href="/Login"
          className="text-[#49AE44] font-semibold hover:text-[#3e8e3a] transition-colors duration-200"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
