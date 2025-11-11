import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Header from './Routers'
import EventOrganization from './components/EventOrganization'
import EventTracking from './components/EventTracking'
import Login from './components/Login'
import Signup from './components/Signup'
import Posts from './Catlogs/Posts'
import Answers from './Catlogs/Answers'
import Chats from './Catlogs/Chats'
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/event-organization" element={<EventOrganization />} />
        <Route path="/event-tracking" element={<EventTracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/answers" element={<Answers />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App