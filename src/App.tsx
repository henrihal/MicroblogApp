import Navbar from './components/Navbar'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { useState } from 'react'

function App() {

  const [searchQuery, setSearchQuery] = useState('')

  return (
    <MantineProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-900/98">
          <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
