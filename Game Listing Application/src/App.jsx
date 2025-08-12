// App.jsx
import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import { ThemeContext } from './Context/ThemeContext'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState('light')
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'dark')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme === 'dark' ? 'bg-black' : ''} min-h-[100vh]`}>
        <Header setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
