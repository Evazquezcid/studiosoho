import './Form.scss'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'

export const ContactUs = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yek80ak', 'template_h81upxa', form.current, 'FsMAdT-9nhKSkRzJO')
      .then((result) => {
        e.target.reset()
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
  };

  return (
     
    <div className="formulario-entero">
      <div className='contact_form'>
        <div className='formulario'>
          <h1 className='h1con'>Contáctanos</h1>
          <h4>¡Escríbenos y nos pondremos en contacto contigo lo antes posible!</h4>
          
          <form ref={form} id="form" onSubmit={sendEmail}>
          <h5 className='aviso'>
              <span class='obligatorio'> * </span>los campos son obligatorios.
            </h5>
            <p>
              <label htmlFor='nombre' class='colocar_nombre'>
                Nombre
                <span className='obligatorio'>*</span>
              </label>
              <input
                type='text'
                name='nombre'
                id='nombre'
                required='obligatorio'
                placeholder='Escribe tu nombre'
              />
            </p>

            <p>
              <label htmlFor='email' class='colocar_email'>
                Email
                <span className='obligatorio'>*</span>
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required='obligatorio'
                placeholder='Escribe tu Email'
              />
            </p>

            <p>
              <label htmlFor='telefone' class='colocar_telefono'>
                Zona a tatuar
                <span className='obligatorio'>*</span>
              </label>
              <input
                type='text'
                name='zona'
                id='zona'
                placeholder='Escribe aqui..'
              />
            </p>

            <p>
              <label htmlFor='asunto' class='colocar_tamaño'>
                Tamaño cm x cm 
                <span className='obligatorio'>*</span>
              </label>
              <input
                type='text'
                name='size'
                id='size'
                required='obligatorio'
                placeholder='cm x cm'
              />
            </p>

            <p>
              <label htmlFor='mensaje' class='colocar_mensaje'>
                Cuentanos tu idea para poder darte el presupuesto más exacto
                <span className='obligatorio'>*</span>
              </label>
              <textarea
                name='mensaje'
                class='texto_mensaje'
                id='mensaje'
                required='obligatorio'
                placeholder='Deja aquí tu idea...'></textarea>
            </p>

            <button type='submit' value='Send'  name='enviar_formulario' id='enviar'>
              <p>Enviar</p>
            </button>

           
          </form>
          </div>
          <img src="../../../assets/logosohocopia.png" alt="logosoho"/>
        </div>
   </div>
  )
}

export default ContactUs