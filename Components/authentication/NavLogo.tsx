import Image from 'next/image';
import Link from 'next/link';

export default function NavLogo() {
  return (
    <nav className="mt-6 ml-8">
      <Link href={'/'}>
        <Image
          src="/pic/logo.png"
          width={137}
          height={56}
          alt="ScapeSync Logo"
        ></Image>
      </Link>
    </nav>
  );
}
