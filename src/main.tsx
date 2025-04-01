import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './components/Profile.tsx'
import Education from './components/Education.tsx'
import Certificate from './components/Certificate.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

      
    <Profile/>
    <Education/>
    <Certificate/>
  </StrictMode>





)
