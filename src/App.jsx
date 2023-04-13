import './App.css';
import { Navbar } from './componente/Navbar';
import { Btn } from './componente/Navbar';
import { Contenedor } from './componente/Contenedor';


export function App() {
  return (

  <>
    <Contenedor>
    <Navbar/>
    <Btn texto = 'Productos'/>
    <Btn texto = 'Contactos'/>
    <Btn texto = 'Ingresar'/>
    <Btn texto = 'TuCarrito'/>
    </Contenedor>
    <h1>Bienvenidos</h1>
    

  </>
   

  );
}

