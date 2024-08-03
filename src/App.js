import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/';
import Equipo from './componentes/Equipo';
import Colaborador from './componentes/Colaborador';
import Footer from './componentes/Footer/index.jsx';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    favorito: true
    },
    {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    favorito: true
    },
    {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora",
    favorito: false
    },
    {
    id: uuid(),
    equipo: "Data Science",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e instructor",
    favorito: false
    },
    {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev. FullStack",
    favorito: false
    },
    {
    id: uuid(),
    equipo: "Data Science",
    foto: "https://cdn2.gnarususercontent.com.br/6/450324/f1b55f07-90cd-46f6-b9c1-02fe071873b9.jpg?width=100&height=100&aspect_ratio=1:1",
    nombre: "Barbara Santos",
    puesto: "Instructora",
    favorito: false
} ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])

  // Ternario --> condición ? seMuestra : noSeMuestra
  // { mostrarFormulario  ? <Formulario/> : <></> }
  // consicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar Colaborador
  const registrarColaorador = (colaborador) => {
    console.log("Nuevo Colaborador:", colaborador);
    // Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id);

    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id !== id )
    actualizarColaboradores(nuevosColaboradores);
  }

  // Actualizar Color de Equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar:", color, id);
    const equiposActualizados = equipos.map( (equipo) => {
      if (equipos.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  // Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  // Actualizar favorito
  const like = (id) => {
    console.log("Like", id);
    const colaboradoresActualizados = colaboradores.map( (colaborador) => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    } )
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      { mostrarFormulario && <Formulario equipos = {equipos.map( (equipo) => equipo.titulo )}  
            registrarColaorador = {registrarColaorador} crearEquipo = {crearEquipo}
          /> 
      }
      
      <MiOrg cambiarMostrar = {cambiarMostrar} /> 
      { 
        equipos.map( (equipo) => <Equipo datos = {equipo} key = {equipo.titulo} colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador = {eliminarColaborador} actualizarColor = {actualizarColor} like = {like} /> )
      }

      <Footer />
      
    </div>
  );
}

export default App;
