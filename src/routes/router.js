import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from '../Content';
import Booking from '../Booking';


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Content/>} />
       <Route path="/Booking" element={<Booking/>} />
      </Routes>
    </Router>
  );
}

export default App;