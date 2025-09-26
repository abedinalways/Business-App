'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
type UserDetail = {
  id: number;
  name: string;
  email: string;
};
export default function Navbar() {
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Load token from localStorage only on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
    }
  }, []);

  // Fetch user detail when token is available
  useEffect(() => {
    if (!token) return;

    const fetchUserDetail = async () => {
      try {
        const res = await fetch(
          'https://apitest.softvencefsd.xyz/api/user-detail',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!res.ok) throw new Error('Failed to fetch user details');

        const data = await res.json();
        setUserDetail(data);
      } catch (err) {
        console.error('Error fetching user details:', err);
      }
    };

    fetchUserDetail();
  }, [token]);

  const handleLogout = () => {
    if (!token) return;

    fetch('https://apitest.softvencefsd.xyz/api/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(() => {
        toast.success('Logout successful!');
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
        }
        setToken(null);
        setUserDetail(null);
      })
      .catch(err => console.error('Error logging out:', err));
  };

  return (
    <nav className="w-full flex justify-between items-center py-3">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/pic/logo.png"
          alt="Logo"
          width={147}
          height={60}
          priority
        />
      </div>

      {/* Button */}
      <div>
        {userDetail ? (
          <button
            onClick={handleLogout}
            className="bg-[#3BA334] text-white font-semibold py-2.5 px-4 sm:px-6 rounded-lg transition hover:bg-green-700 cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/userRole"
            className="bg-[#3BA334] text-white font-semibold py-2.5 px-4 sm:px-6 rounded-lg transition hover:bg-green-700 cursor-pointer"
          >
            Get Started
          </Link>
        )}
      </div>
    </nav>
  );
}
