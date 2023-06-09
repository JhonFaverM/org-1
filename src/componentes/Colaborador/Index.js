import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, favorito } = props.datos
    const { colorPrimario, eliminarColaborador, like} = props//Desestructuracion
    return <div className="colaborador">
    <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { favorito ?  <AiOutlineHeart color="red" onClick={() => like(id)} /> : <AiFillHeart onClick={() => like(id)} />}
              
        </div> 
    </div>
  
}


export default Colaborador


//<img src="https://github.com/JhonFaverM.png" alt="Jhon M" />
//{fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}