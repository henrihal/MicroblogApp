import Navbar from './components/Navbar'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-900/98">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
