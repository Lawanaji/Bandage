import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './componants/Layout/Layout'
import Home from './pages/Home/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/contact" element={<Layout><Contact/></Layout>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
