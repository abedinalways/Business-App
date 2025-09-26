'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  const handlePassShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const res = await fetch('https://apitest.softvencefsd.xyz/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success('✅ Login successful!');
        console.log(result);
        router.push('/');

        localStorage.setItem('token', result.token);
      } else {
        toast.error(result.message || '❌ Login failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 sm:px-6 py-10">
      <form onSubmit={handleLogin} className="flex flex-col gap-5 mt-6">
        {/* Email */}
        <div className="relative">
          <label
            htmlFor="email"
            className="absolute -top-2 left-3 bg-white px-1 text-[#919EAB] text-sm sm:text-base rounded-md"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            required
            className="w-full h-12 sm:h-14 rounded-lg pl-3 sm:pl-4 border border-[#919EAB]/32 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 text-sm sm:text-base"
          />
          <button
            onClick={handlePassShow}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#637381] hover:text-[#49AE44] transition-colors duration-200"
          >
            {showPass ? <IoIosEye size={20} /> : <IoMdEyeOff size={20} />}
          </button>
        </div>

        {/* Remember & Forgot Password */}
        <div className="flex sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              name="rememberPass"
              defaultChecked
              className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#49AE44] rounded-md checked:bg-[#49AE44] checked:border-[#49AE44] transition-colors cursor-pointer hover:border-[#49AE44]/80 hover:checked:bg-[#49AE44]/90"
            />
            <span className="text-[#212B36] text-sm sm:text-base">
              Remember me
            </span>
          </label>

          <Link
            href="/ForgotPass"
            className="text-[#49AE44] text-sm sm:text-base font-semibold hover:text-[#3e8e3a] transition-colors duration-200 mt-1 sm:mt-0"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <input
          type="submit"
          value="Login"
          className="w-full py-3 sm:py-3.5 bg-[#49AE44] rounded-lg text-white font-bold cursor-pointer hover:bg-[#3e8e3a] transition-colors duration-200 text-sm sm:text-base"
        />
      </form>

      {/* Divider */}
      <div className="flex items-center mt-8 mb-5">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm sm:text-base">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Google Login */}
      <button className="w-full border border-[#919EAB]/32 py-3 sm:py-3.5 text-[#637381] flex justify-center items-center gap-3 rounded-lg cursor-pointer hover:border-[#49AE44]/50 hover:text-[#49AE44] transition-all duration-200 text-sm sm:text-base">
        <FcGoogle size={22} />
        Log in with Google
      </button>

      {/* Register */}
      <p className="mt-6 text-sm sm:text-base text-center text-[#212B36]">
        Don&apos;t have an account?{' '}
        <Link
          href="/Register"
          className="text-[#49AE44] font-semibold hover:text-[#3e8e3a] transition-colors duration-200"
        >
          Get started
        </Link>
      </p>
    </div>
  );
}
