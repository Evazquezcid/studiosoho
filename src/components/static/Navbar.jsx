import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'



const Navbar = () => {

  return (
   <ul className='Navbar'>
   <li>
            <Link
              to='/'>
              HOME
            </Link>
    </li>
    <li>
            <Link
              to='/Guest'>GUEST
            </Link>
    </li>
    <li>
            <Link
              to='/Form'>RESERVA TU CITA
            </Link>
    </li>
   
   </ul>
  )
}

export default Navbar