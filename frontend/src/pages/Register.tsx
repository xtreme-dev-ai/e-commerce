import { useState } from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../assets/register.webp';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <div className="flex flex-col md:flex-row items-stretch w-full min-h-[calc(100vh-100px)]">
      {/* Form Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md drop-shadow-xl bg-white p-6 sm:p-8 border border-gray-200 shadow-sm rounded-xl transition-all duration-300 hover:shadow-md"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
              E-commerce
            </h2>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
            Create an Account
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-6">
            Join us to get started
          </p>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all font-medium text-gray-700"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all font-medium text-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900 transition-all font-medium text-gray-700"
              placeholder="Create a password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-900 text-white p-3 rounded-xl hover:bg-red-800 font-semibold transition-all duration-200 cursor-pointer mb-4 shadow-sm active:scale-[0.98]"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-red-900 hover:text-red-700 hover:underline transition-colors"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 border-l border-gray-200">
        <img
          src={registerImg}
          alt="Create Account"
          className="w-full h-full min-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
