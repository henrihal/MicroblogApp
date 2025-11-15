import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AuthenticationTitle from './components/AuthenticationTitle'
import type { LoginData } from './components/AuthenticationTitle'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { useEffect, useState } from 'react'
import loginSerivce from './services/loginSerivce'
import postService from './services/postService'

interface User{
  user:{
    id: string,
    email: string
  },
  token: string
}

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [user, setUser] = useState<null | User>(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      postService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (data: LoginData) => {
    try {
      const loggedUser = await loginSerivce.login({ email: data.email, password: data.password })
      setUser(loggedUser)
      if(data.rememberMe) {
        window.localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
      }
      postService.setToken(loggedUser.token)
    } catch (err) {
      console.log('Failed to login: ', err)
    }
  }

  return (
    <MantineProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-900/98 flex flex-col">
          {!user && <AuthenticationTitle onSubmit={handleLogin} />}
          {user &&
            <div className="flex-1 pb-5">
              <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} userId={user.user.id}/>
              <Routes>
                <Route path="/" element={<Home searchQuery={searchQuery} />} />
                <Route path="profile/:id" element={<Profile />} />
              </Routes>
            </div>
          }
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
