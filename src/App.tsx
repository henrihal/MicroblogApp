import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import type { LoginData } from './pages/Login'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { useEffect, useState } from 'react'
import loginSerivce from './services/loginSerivce'
import postService from './services/postService'
import PageNotFound from './pages/PageNotFound'
import Register, { type RegisterData } from './pages/Register'
import userService from './services/userService'

interface User {
  user: {
    id: string,
    email: string
  },
  token: string
}

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [user, setUser] = useState<null | User>(null)
  const [loginError, setLoginError] = useState(false)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      postService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (data: LoginData) => {
      setLoginError(false)
      const loggedUser = await loginSerivce.login(data)
      if(!loggedUser) {
        return setLoginError(true)
      }
      setUser(loggedUser)
      if (data.rememberMe) {
        window.localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
      }
      postService.setToken(loggedUser.token)
  }

  useEffect(() => {
    if (loginError) {
      const errorTimeout = setTimeout(() => setLoginError(false), 3000)
      return () => clearTimeout(errorTimeout)
    }
  }, [loginError])

  const handleCreateUser = async (data: RegisterData) => {
    try {
      const registeredUser = await userService.create(data)
      if (!registeredUser) {
        throw new Error('Failed to register user')
      }
      console.log('New user registered: ', registeredUser)
    } catch (err) {
      console.log(err)
    }
  }

  const handleCreateUser = async (data: RegisterData) => {
    try {
      const registeredUser = await userService.create(data)
      if(!registeredUser) {
        throw new Error('Failed to register user')
      }
      console.log('New user registered: ', registeredUser)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <MantineProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-900/98 flex flex-col">
          <div className="flex-1 pb-5">
            {user &&
              <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} userId={user.user.id} />
            }
            <Routes>
              <Route path="login" element={!user ? <Login onSubmit={handleLogin} loginError={loginError} /> : <Navigate replace to={"/"} />} />
              <Route path="register" element={!user ? <Register onSubmit={handleCreateUser} /> : <Navigate replace to={"/"} />} />
              <Route path="/" element={user ? <Home searchQuery={searchQuery} /> : <Navigate replace to={"login"} />} />
              <Route path="profile/:id" element={<Profile />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
