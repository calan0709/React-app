
import React from 'react'
import farmacia from './img/farmacia.png'
import { Carro } from './Carro'
import './style.css'


export const Navbar = () => {
  return (
   
    <nav className='navc'>

      <img src={farmacia}/>
      <Btn texto = 'Productos'/>
      <Btn texto = 'Contactos'/>
      <Btn texto = 'Ingresar'/>
      <Btn texto = 'Nosotros'/>
      <Carro/>
      
    </nav>
    
  )
} 

export const Btn = ({texto}) => { 
  return (

      <button className='btnnav' onClick={texto}>{texto}</button>
      
  )
}