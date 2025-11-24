import { useState } from 'react'
import { Link } from 'react-router'

export interface LoginData {
  email: string,
  password: string,
  rememberMe: boolean
}

function Login({ onSubmit, loginError }: { onSubmit: (data: LoginData) => void, loginError: boolean }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      rememberMe: rememberMe
    }
    console.log({ email, password, rememberMe })
    onSubmit(data)
  }

  return (
    <div className="w-full max-w-xs my-10 mx-auto">
      {/* Title */}
      <h1 className="text-center text-xl font-bold text-white mb-1">
        Welcome back!
      </h1>

      {/* Subtitle */}
      <p className="text-center text-sm text-gray-400 mb-4">
        Do not have an account yet?{' '}
        <Link to="/register" className="text-sky-400 hover:text-sky-300 underline">
          Create account
        </Link>
      </p>

      {/* Form Container */}
      <div className="bg-slate-800/50 border border-gray-300/10 rounded-sm p-4 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            {/* Login error */}
            {loginError &&
              <div className="mb-3 p-2 bg-red-900/30 border border-red-600/50 rounded text-red-200 text-xs">
                Wrong username or password
              </div>
            }
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 text-sm"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 text-sm"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.currentTarget.checked)}
                className="w-4 h-4 bg-gray-700 border border-gray-600 rounded cursor-pointer mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-xs text-sky-400 hover:text-sky-300 underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-sky-700 hover:bg-sky-800 text-white font-medium py-2 px-4 rounded-sm transition-colors text-sm cursor-pointer"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login