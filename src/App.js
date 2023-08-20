import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Others from "./components/Others";
import Projects from "./components/Projects";

function App() {
  return (
    
    <div className="sm:max-w-auto sm:max-h-auto ">
      <Navbar />
      <Profile />
      <Projects />
      <Skills />
      <Others />
      <Contact />
    </div>
  );
}

export default App;
