import Image from 'next/image';
import Link from 'next/link';

export default function ResetPassword() {
  return (
    <div className="my-6 lg:my-0">
      <nav className="flex items-center justify-center mb-6">
        <Link href={'/'}>
          <Image
            src="/pic/logo.png"
            width={137}
            height={56}
            alt="ScapeSync Logo"
          ></Image>
        </Link>
      </nav>

      <main>
        <h1 className="text-[#212B36] text-2xl font-bold text-center mb-2">
          Who Are You?
        </h1>
        <p className="text-[#637381] text-center">
          Choose the option that best describes you so we can tailor your
          experience.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-20">
          {/* Client */}
          <Link
            href={'/Login'}
            className="group px-9 py-6 bg-[#F9FAFB] border border-[#DFE3E8] rounded-2xl flex justify-center flex-col items-center cursor-pointer hover:bg-[#EDF7EC] hover:border-[#49AE44] transition-colors duration-200"
          >
            <Image
              src="https://i.ibb.co/x9kc22g/Client-ixvnyq.png"
              width={100}
              height={100}
              alt="Client Illustration"
            />

            <h3 className="font-semibold text-[22px] text-[#637381] mt-5 mb-1.5 group-hover:text-[#49AE44] transition-colors duration-200">
              I&apos;m a Client
            </h3>

            <p className="text-[#919EAB] font-semibold text-sm text-center group-hover:text-[#6DBE69] transition-colors duration-200">
              Discover services & track projects
              <br />
              effortlessly.
            </p>
          </Link>

          {/* Business Owner */}
          <Link
            href={'/Login'}
            className="group px-9 py-6 bg-[#F9FAFB] border border-[#DFE3E8] rounded-2xl flex flex-col items-center cursor-pointer hover:bg-[#EDF7EC] hover:border-[#49AE44] transition-colors duration-200"
          >
            <Image
              src="https://i.ibb.co/mV8cXpNf/Business-pqcgz9.png"
              width={100}
              height={100}
              alt="Business Owner Illustration"
            />

            <h3 className="font-semibold text-[22px] text-[#637381] mt-5 mb-1.5 group-hover:text-[#49AE44] transition-colors duration-200">
              I&apos;m a Business Owner
            </h3>

            <p className="text-[#919EAB] font-semibold text-sm text-center group-hover:text-[#6DBE69] transition-colors duration-200">
              Manage jobs, staff & clients with
              <br />
              ease.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
