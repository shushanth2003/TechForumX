import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Header from './Routers'
import Catlog from './components/Catlog'
import EventOrganization from './components/EventOrganization'
import EventTracking from './components/EventTracking'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/catlog" element={<Catlog />} />
        <Route path="/event-organization" element={<EventOrganization />} />
        <Route path="/event-tracking" element={<EventTracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App