'use client';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import RegisterVerify from '@/Components/authentication/RegisterVerify';
import { useSearchParams } from 'next/navigation';

export default function VerifyRegistration() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  return (
    <div className="max-w-[480px] mx-auto">
      <Link
        href={'/Register'}
        className="text-[#49AE44] text-sm flex items-center gap-2 font-bold mb-8"
      >
        <IoIosArrowBack />
        Back
      </Link>
      <h1 className="text-[#212B36] text-2xl font-bold mb-2">
        Please check your email!
      </h1>
      <p className="text-[#637381]">
        We&apos;ve emailed a 6-digit confirmation code to{' '}
        <span className="font-semibold">{email}</span>, please enter the code
        below to verify your email.
      </p>
      <RegisterVerify email={email} />
    </div>
  );
}
