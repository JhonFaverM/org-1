import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")//"Devops"

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props //desestructurar

    const manejarEnvio = (e) => {
        e.preventDefault()//(e= event)evita recargar la pagina en su totalidad*/
        console.log("manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()//(e= event)evita recargar la pagina en su totalidad*/
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear colaborador
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar color en Hexag"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>
    
}


export default Formulario

