import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header/Header'
import { Body } from './components/Body/Body'
import { Footer } from './components/Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import './style.css'

Aos.init({
  duration: 1200, // Puedes personalizar el tiempo de duración de las animaciones
  once: true, // Hacer que la animación se ejecute solo una vez
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <div className='ctn-body'>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  </StrictMode>,
)
