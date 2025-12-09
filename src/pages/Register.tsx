import { useState } from "react";
import { useNavigate } from "react-router";

export interface RegisterData {
    name: string,
    email: string,
    password: string
}

function Register({ onSubmit }: { onSubmit: (data: RegisterData) => void }) {
    const [userName, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            name: userName,
            email: email,
            password: password
        }
        console.log({ userName, email, password })
        onSubmit(data)
        navigate('/login')
    }

    const navigate = useNavigate()

    return (

        <div className="w-full max-w-xs my-10 mx-auto">
            {/* Title */}
            <h1 className="text-center text-xl font-bold text-white mb-1 pb-5">
                Sign up!
            </h1>
            {/* Form Container */}
            <div className="bg-slate-800/50 border border-gray-300/10 rounded-sm p-4 shadow-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Username22"
                            value={userName}
                            onChange={(e) => setUsername(e.currentTarget.value)}
                            required
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 text-sm"
                        />
                    </div>
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">
                            Email
                        </label>
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

                    {/* Sign In Buttons */}
                    <div className="flex gap-2 mt-6">
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="flex-1 px-3 py-1.5 bg-gray-700/50 border border-gray-600/50 text-white rounded text-sm hover:bg-gray-600 hover:border-gray-500/50 cursor-pointer transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-3 py-1.5 bg-sky-700 hover:bg-sky-800 text-white font-medium rounded-sm transition-colors text-sm cursor-pointer"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register