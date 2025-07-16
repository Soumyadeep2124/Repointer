import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router';
import { loginUser } from '../authSlice';
import { useEffect, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { assets } from '../assets/assets';

const loginSchema = z.object({
  emailId: z.string().email("Invalid Email"),
  password: z.string().min(8, "Password is too weak")
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0f111d]">
      <div className="w-full max-w-md rounded-3xl p-8 bg-[#161a2b] shadow-xl border border-[#2a2e38] text-white">
        {/* Icon + Title */}
        <div className="flex justify-center mb-6">
          <img src={assets.Repointer} alt="" className='w-20 h-20 rounded-full'/>
        </div>

        <h2 className="text-center text-2xl font-semibold mb-1">Welcome Back!</h2>
        <p className="text-center text-gray-400 text-sm mb-6">Sign in to continue your learning journey</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="text-sm mb-1 block">Email Address</label>
            <div className="flex items-center px-3 py-2 rounded-xl bg-[#1f2333] border border-[#2a2e38]">
              <FiMail className="text-orange-500 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent focus:outline-none w-full text-white"
                {...register('emailId')}
              />
            </div>
            {errors.emailId && (
              <p className="text-red-400 text-xs mt-1">{errors.emailId.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="text-sm mb-1 block">Password</label>
            <div className="flex items-center px-3 py-2 rounded-xl bg-[#1f2333] border border-[#2a2e38] relative">
              <FiLock className="text-orange-500 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="bg-transparent focus:outline-none w-full text-white pr-8"
                {...register('password')}
              />
              <button
                type="button"
                className="absolute right-3 text-gray-500 hover:text-white"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:opacity-90 text-white font-medium py-3 mt-10 rounded-xl shadow-lg transition"
            >
              {loading ? "Signing In..." : "Sign In →"}
            </button>
          </div>
        </form>

        {/* Signup Link */}
        <p className="mt-6 text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <NavLink to="/signup" className="text-orange-500 hover:underline">Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
