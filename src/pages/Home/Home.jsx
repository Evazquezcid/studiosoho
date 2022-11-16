import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'



const Home = () => {
  return (
  <div className='home'>
    <section class="sectionhome">
    <img  className='logohome'src="../../../assets/logonegro.png" alt="vivifoto"/>
    </section>
  <section class="text-block">
    <h2 className='h2home'>EL ESTUDIO</h2>
    <div className='maquina' >
    {/* <img className='fotomaquina' src="../../../assets/maquinatattoo.png" alt="fotomaquinatattoo"/> */}
    <img className='linea' src="../../../assets/lineatinta.png" alt="linea"/>
    </div>
    
    <p className='phome'>Soho Tattoo nace desde la ilusión y la pasión por el arte y el dibujo.
    Para nosotras lo mas importante es encontrar el equilibrio perfecto en la manera en la que quieres mostrar la idea en tu piel y como llevarla a cabo. Te esperamos en el barrio del Soho, en Málaga , cerca del casco antiguo. Si quires más información pincha el botón y rellena nuestro formulario.</p>
  </section>
  <section class="zonaartistas">
    <h2 className='tatuadoras'>ARTISTAS</h2>
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
  <div>
    <h1 className='librodevisitas'>LIBRO DE VISITAS</h1>
    <div className='fotosreseñas'>
    <img className='reseñas' src="../../../assets/reseña1.png" alt="reseña"/>
    <img className='reseñas' src="../../../assets/reseña2.png" alt="reseña2"/>
    <img className='reseñas' src="../../../assets/reseña3.png" alt="reseña3"/>
    </div>
    <a href="https://www.google.com/maps/place/Soho+Tattoo+M%C3%A1laga/@36.7165312,-4.4226402,15z/data=!4m7!3m6!1s0x0:0x6c90669e2f4391c3!8m2!3d36.7165312!4d-4.4226402!9m1!1b1" className='boton'> + ⭐️</a>
    
  </div>
  </div>

  )
}

export default Home