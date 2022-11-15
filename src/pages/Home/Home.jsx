import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'



const Home = () => {
  return (
     
    
   
   <div className='home'>
    <section class="sectionhome">
     <img  className='logohome'src="../../../assets/logosohocopia.png" alt="vivifoto"/>
    </section>
  <section class="text-block">
    <h2 className='h2home'>EL ESTUDIO...</h2>
    <p className='phome'>Soho Tattoo nace desde la ilusión y la pasión por el arte y el dibujo.
    Para nosotras lo mas importante es encontrar el equilibrio perfecto en la manera en la que quieres mostrar la idea en tu piel y como llevarla a cabo. Te esperamos en el barrio del Soho, en Málaga , cerca del casco antiguo. Si quires más información pincha el botón y rellena nuestro formulario.</p>
  </section>
  <section class="zonaartistas">
    <h2 className='tatuadoras'>Nuestras tatuadoras...</h2>
    <ul >
    <li className='galeriatatuadoras'>
     <a title="instavivi" href="https://www.instagram.com/vivianacalvotattoo/"><img src="../../../assets/vivifoto.png" alt="vivifoto"/></a>
      <h1 className="nombrestatuadoras">Viviana Calvo</h1>
      </li>
      <li className='galeriatatuadoras'>
      <a title="instasilvia" href="https://www.instagram.com/silviapecezeta/"> <img src="../../../assets/silviafoto.png" alt="silviafoto"/></a>
      <h1 className="nombrestatuadoras">Silvia Pz</h1>
      </li>
      
    </ul>
    
  </section>
  <button className='boton'> <Link to='/Form'>Contacta</Link></button>
  </div>
   
    
    
    
  )
}

export default Home