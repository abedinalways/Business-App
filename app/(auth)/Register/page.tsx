'use client';
import Register from '@/Components/authentication/Register';

export default function RegisterPage() {
  return (
    <div className="max-w-[480px] mx-auto">
      <div className="px-2">
        <h1 className="text-[#212B36] text-2xl font-bold text-center mb-2">
          Create your Account
        </h1>
        <p className="text-[#637381] text-center">
          When sports Meets smart Tech.
        </p>
      </div>
      <Register />
    </div>
  );
}
