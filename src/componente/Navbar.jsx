/* barra de menu
titulo y nombre de tienda
un listado de categorias clickeables
incorporar una libreria de estilos con bootstrap/matrialize u otros 
crear carrito con cantidad de elementos

*/
import React from 'react'
import farmacia from './img/farmacia.png'
import './style.css'

export const Navbar = () => {
  return (
   
    <img src={farmacia}/>

  )
} 

export const Btn = ({texto}) => { 
  return (

      <button className='btnnav' onClick={texto}>{texto}</button>
      
  )
}