import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav'>
        <ul className='list'>
            <Link className="anchor" to="/" >Iniciar Sesion</Link>
            <Link className="anchor" to="/UseState" >Crear Cuenta</Link>
        </ul>
    </nav>
  )
}