'use client';

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative bg-[#0F3B34] pt-10  background-footer overflow-hidden">
      <div className="relative w-11/12 lg:max-w-7xl mx-auto  z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/pic/logo2.png"
              alt="Logo"
              width={207}
              height={76}
              priority
            />
          </div>

          {/* Description */}
          <div className="flex-1">
            <p className="text-sm sm:text-base text-white mt-4 md:mt-0 max-w-md">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <Image
              src="https://i.ibb.co/gLG3q2wN/Store-download-button.png"
              alt="App Store"
              width={170}
              height={60}
            />
            <Image
              src="https://i.ibb.co/spbMpytT/Store-download-button-1.png"
              alt="Play Store"
              width={150}
              height={60}
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-20">
          <FaYoutube size={24} color="white" className="hover:text-gray-300" />
          <FaXTwitter size={24} color="white" className="hover:text-gray-300" />
          <FaFacebook size={24} color="white" className="hover:text-gray-300" />
          <FaInstagram
            size={24}
            color="white"
            className="hover:text-gray-300"
          />
        </div>
      </div>
      <div className="pt-20">
        <hr className="border-t border-[#E5E5E520]" />
        <p className="w-11/12 lg:max-w-7xl mx-auto py-2 text-sm text-[#E5E5E530] ">
          © 2021-2025, ScapeSync. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
