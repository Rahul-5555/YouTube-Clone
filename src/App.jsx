import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video'

const App = () => {
 
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        {/* Pass sidebar state to the Home component */}
        <Route path="/" element={<Home sidebar={sidebar} />} /> 
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  )
}

export default App;
