import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Divisones de una Start Up</h1>
        <Testimonio
          nombre='Area'
          area='Desarrollo de Aplicaciones'
          imagen='pro'
          cargo='Software Complet'
          empresa='Technology'
          testimonio='El desarrollo de software es el conjunto de actividades para el diseño, creación y despliegue de programas informáticos. En otras palabras, se trata de todos los procesos involucrados en un proyecto de software. Desde su origen, pasando por la producción y las revisiones, hasta la entrega y posterior mantenimiento.'/>
        <Testimonio
          nombre='Area'
          area='Diseño'
          imagen='dis'
          cargo='Arte Visual'
          empresa='Full Design'
          testimonio='Los diseñadores se centran en crear interfaces y experiencias que sean intuitivas, atractivas y satisfactorias para los usuarios. Esto es vital para retener a los clientes y fomentar su lealtad hacia el producto o servicio de la startup,Los diseñadores trabajan en la creación y desarrollo de la identidad visual de la startup, Esto ayuda a establecer una imagen de marca distintiva y reconocible en el mercado.'/>
        <Testimonio 
          nombre='Area'
          area='Ventas'
          imagen='ventas'
          cargo='Administracion'
          empresa='Admin Business'
          testimonio='Una empresa de ventas en una startup se refiere al departamento, área o función encargada de llevar a cabo las actividades relacionadas con la comercialización y venta de los productos o servicios que la startup ofrece en el mercado. Esta función es esencial para el crecimiento y la sostenibilidad de la empresa emergente, ya que es responsable de generar ingresos y establecer relaciones con los clientes.'/>
      </div>
    </div>
  );
}

export default App;
