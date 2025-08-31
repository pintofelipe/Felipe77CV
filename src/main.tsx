import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Profile from "./components/Profile.tsx";
import Education from "./components/Education.tsx";
import Certificate from "./components/Certificate.tsx";
import Skill from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />}/>
        
        <Route path="certificates" element={<Certificate/>} />
        <Route path="education" element={<Education/>} />
        <Route path="skills" element={<Skill/>}/>
        <Route path="projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
    <Certificate/>
    <Footer/>
  </StrictMode>
);
