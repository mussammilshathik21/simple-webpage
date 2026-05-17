import React from 'react'

import Navbar from './compoents/Navbar';
import Project from './compoents/Project';
import Guide from './compoents/Guide';
import Footer from './compoents/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Project/>
      <Guide/>
      <Footer/>
    </div>
  )
}

export default App