import Image from 'next/image';
import Link from 'next/link';

export default function RegistrationSuccess() {
  return (
    <div className="max-w-[480px] mx-auto">
      <div className="flex justify-center items-center">
        <Image
          src={'https://i.ibb.co/nsB9x45s/Success-zlxe3r.png'}
          width={332}
          height={328}
          alt="Flare"
        ></Image>
      </div>
      <h1 className="text-[#212B36] text-2xl font-bold mt-9 mb-4">
        Password Changed Successfully!
      </h1>
      <p className="text-[#637381]">
        Your password has been reset successfully. Please log in to your account
        using your new password.
      </p>
      <Link
        href={'/Login'}
        className="block text-center mt-10 w-full py-3 bg-[#49AE44] rounded-lg text-white font-bold cursor-pointer hover:bg-[#3e8e3a] transition-colors duration-200"
      >
        Go to Login
      </Link>
    </div>
  );
}
