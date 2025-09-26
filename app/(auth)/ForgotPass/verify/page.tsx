import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import ForgotPassVerify from '@/Components/authentication/ForgotPassword/ForgotPassVerify';

export default function VerifyResetPass() {
  return (
    <div className="max-w-[480px] mx-auto">
      <Link
        href={'/ForgotPass'}
        className="text-[#49AE44] text-sm flex items-center gap-2 font-bold mb-8"
      >
        <IoIosArrowBack />
        Back
      </Link>
      <h1 className="text-[#212B36] text-2xl font-bold mb-2">
        Please check your email!
      </h1>

      <ForgotPassVerify />
    </div>
  );
}
