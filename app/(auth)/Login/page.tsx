import LoginForm from '@/Components/authentication/Login';

export default function Login() {
  return (
    <div className="max-w-[480px] mx-auto">
      <div className="px-2">
        <h1 className="text-[#212B36] text-2xl font-bold text-center mb-2">
          Welcome to ScapeSync
        </h1>
        <p className="text-[#637381] text-center">
          Please share your login details so you can access the website.
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
