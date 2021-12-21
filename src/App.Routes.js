import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Destination from './Pages/Destination/Destination'
import Crew from './Pages/Crew/Crew'
import Technology from './Pages/Technology/Technology'
import NotFound from './Pages/NotFound/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default AppRoutes
