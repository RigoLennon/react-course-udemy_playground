import Header from '../components/comunes/Header';
import ClaseComponent from '../components/ClaseComponent';
import NavBar from '../components/comunes/NavBar';
import Link from 'next/link';
import {matematicas_clase, ciencias_clase, computacion_clase} from '../data/estudiantes';

function index (){
    return(
        <div>
            <Header />
            <NavBar />
            <div>
                <h1>Calculadora de gastos</h1>
                <a className="waves-effect waves-light btn"><Link href="/gastos">OK</Link></a>
            </div>
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