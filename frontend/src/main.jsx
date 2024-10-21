import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './App.jsx';
import Projects from './components/Projects.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail/>} />
  
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
