import { useState } from "react"
import "./Formulario.css" 
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaorador, crearEquipo} = props
    
    const  manejarEnvio = (event) => {
        event.preventDefault()                    /*Quita el comportamiento por defecto del formulario.*/
        console.log("Manejar envio");

        const datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

       registrarColaorador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color });
    }

    return <section className = "formulario">
        <form onSubmit = { manejarEnvio }>
            <h2>Completa el formulario para crear el colaborador:</h2>
            <Campo 
                titulo = "Nombre" 
                placeholder = "Ingresar nombre" 
                required 
                valor = {nombre} 
                actualizarValor = {actualizarNombre} 
            /> 
            <Campo 
                titulo = "Puesto" 
                placeholder = "Ingresar puesto" 
                required 
                valor = {puesto} 
                actualizarValor = {actualizarPuesto} 
            />
            <Campo 
                titulo = "Foto" 
                placeholder = "Ingresar enlace de la foto" 
                required 
                valor = {foto} 
                actualizarValor = {actualizarFoto} 
            />
            <ListaOpciones 
                valor = {equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos = { props.equipos }
            />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit = { manejarNuevoEquipo }>
            <h2>Completa el formulario para crear el equipo:</h2>
            <Campo 
                titulo = "Titulo" 
                placeholder = "Ingresar titulo" 
                required 
                valor = {titulo} 
                actualizarValor = {actualizarTitulo} 
            /> 
            <Campo 
                titulo = "Color" 
                placeholder = "Ingresar el Color en Hex" 
                required 
                valor = {color} 
                actualizarValor = {actualizarColor} 
                type = "color"
            />
            <Boton>
                Crear Equipo
            </Boton>
        </form>
    </section>
} 

export default Formulario