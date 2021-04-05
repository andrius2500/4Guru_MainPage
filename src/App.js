import React from 'react';

import Navbar from './Components/Navbar/Navbar.js';
import Header from './Components/Header/Header.js';
import AboutUs from './Components/AboutUs/AboutUs.js';
import BlogMain from './Components/BlogMain/BlogMain.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header /> */}
      <AboutUs />
      <BlogMain />
    </div>
  );
}

export default App;
