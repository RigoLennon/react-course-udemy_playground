import Header from '../components/comunes/Header';
import ClaseComponent from '../components/ClaseComponent';
import NavBar from '../components/comunes/NavBar';
import {matematicas_clase, ciencias_clase, computacion_clase} from '../data/estudiantes';

function index (){
    return(
        <div>
            <Header />
            <NavBar />
            <h1 style={{textAlign:"center"}}>Cursos del plan </h1>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <ClaseComponent nombre_clase="Matematicas" alumnos={matematicas_clase}/>
                <ClaseComponent nombre_clase="Ciencias" alumnos={ciencias_clase}/>
                <ClaseComponent nombre_clase="Computación" alumnos={computacion_clase}/>
            </div>
            <style jsx global>
                {
                    `
                        body{
                            background:#ffca20;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default index;