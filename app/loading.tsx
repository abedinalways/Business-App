'use client';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-pink-50 via-white to-purple-50">
      {/* Logo with subtle floating animation */}
      <div className="animate-bounce-slow mb-10">
        <Image
          src="/pic/logo.png"
          width={200}
          height={80}
          alt="ScapeSync Logo"
          className="mx-auto drop-shadow-md"
        />
      </div>

      {/* Cute Flower Loader */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 w-3 h-3 bg-pink-400 rounded-full animate-spin-slow origin-top"></div>
        <div className="absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-spin-slow origin-right"></div>
        <div className="absolute inset-0 w-3 h-3 bg-yellow-400 rounded-full animate-spin-slow origin-bottom"></div>
        <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-spin-slow origin-left"></div>
      </div>

      {/* Cute Text */}
      <p className="mt-8 text-gray-600 font-medium animate-pulse">
        🌸 Just a moment... your app is loading!
      </p>

      {/* Extra style animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 2s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
