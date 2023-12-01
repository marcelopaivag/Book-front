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
          <Route path="/Book-front/" element={<Home />} />
          <Route path="/Book-front/*" element={<Navigate to='/Book-front/' />} />
          <Route path="/Book-front/projects" element={<Projects />} />
          <Route path="/Book-front/projects/:id" element={<Project />} />
          <Route path="/Book-front/about" element={<About />} />
          <Route path="/Book-front/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  )
}

export default App
