import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Project } from './pages/Project'
import { UserProvider } from './context/UserContext'
import { Contact } from './pages/Contact'
import { About } from './pages/About'

function App() {

  return (
    <>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to='/' />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  )
}

export default App
