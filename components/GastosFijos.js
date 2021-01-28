import React, {useState} from 'react'

const GastosFijos = () =>{

    const [datos, setDatos] = useState({
        viv_renta: 0,
        viv_hipoteca: 0,
        viv_manteni: 0,
        edu_colegio: 0,
        edu_clase_extr: 0,
        seg_gas_medico: 0,
        seg_dental: 0,
        seg_auto: 0,
        seg_casa: 0,
        seg_vida: 0,
        seg_retiro: 0,
        aho_meta: 0,
        aho_inversion:0,
        sus_hbo :0,
        sus_netflix :0,
        sus_apple :0,
        sus_spotify :0,
        sus_cable :0,
        sus_gym :0,
        deu_cred_edu :0,
        deu_prestamo :0,
        deu_tanda :0,
    })

    const [totalGastosFijos, setGastosFijos] = useState(0)

    const handleInputChange = (e) =>{
        console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    var viv_renta_int = parseInt(datos.viv_renta, 10)
    var viv_hipoteca_int = parseInt(datos.viv_hipoteca, 10)
    var viv_manteni_int = parseInt(datos.viv_manteni, 10)
    var edu_colegio_int = parseInt(datos.edu_colegio, 10)
    var edu_clase_extr_int = parseInt(datos.edu_clase_extr, 10)
    var seg_gas_medico_int = parseInt(datos.seg_gas_medico, 10)
    var seg_dental_int = parseInt(datos.seg_dental, 10)
    var seg_auto_int = parseInt(datos.seg_auto, 10)
    var seg_casa_int = parseInt(datos.seg_casa, 10)
    var seg_vida_int = parseInt(datos.seg_vida, 10)
    var seg_retiro_int = parseInt(datos.seg_retiro, 10)
    var aho_meta_int = parseInt(datos.aho_meta, 10)
    var aho_inversio_int = parseInt(datos.aho_inversion, 10)
    var sus_hbo_int = parseInt(datos.sus_hbo, 10)
    var sus_netflix_int = parseInt(datos.sus_netflix, 10)
    var sus_apple_int = parseInt(datos.sus_apple, 10)
    var sus_spotify_int = parseInt(datos.sus_spotify, 10)
    var sus_cable_int = parseInt(datos.sus_cable, 10)
    var sus_gym_int = parseInt(datos.sus_gym, 10)
    var deu_cred_edu_int = parseInt(datos.deu_cred_edu, 10)
    var deu_prestamo_int = parseInt(datos.deu_prestamo, 10)
    var deu_tanda_int = parseInt(datos.deu_tanda, 10)

    const resVivienda = (viv_renta_int + viv_hipoteca_int + viv_manteni_int);
    const resEducacion = (edu_colegio_int + edu_clase_extr_int);
    const resSeguro = (seg_gas_medico_int + seg_dental_int + seg_dental_int + seg_auto_int + seg_casa_int + seg_vida_int + seg_retiro_int);
    const resAhorro = (aho_meta_int + aho_inversio_int);
    const resSuscripciones = (sus_hbo_int + sus_netflix_int + sus_apple_int + sus_spotify_int + sus_cable_int + sus_gym_int);
    const resDeudas = (deu_cred_edu_int + deu_prestamo_int + deu_tanda_int);

    const resultadoGastosFijos = (
        resVivienda + resEducacion + resSeguro + resAhorro + resSuscripciones + resDeudas
    )

    return(
        <div>
            <div>
                <h4>Vivienda</h4>

                <p>Renta</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="viv_renta"
                ></input>
                <p>Hipoteca</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="viv_hipoteca"
                ></input>
                <p>Mantenimiento</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="viv_manteni"
                ></input>

                <p>Gastos de vivienda: {resVivienda}</p>
            </div>

            <div>
                <h4>Educacion</h4>

                <p>Colegiatura</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="edu_colegio"
                ></input>
                <p>Clases extra</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="edu_clase_extr"
                ></input>

                <p>Gastos de Educacion: {resEducacion}</p>
            </div>

            <div>
                <h4>Seguros</h4>

                <p>Gastos Medicos</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="seg_gas_medico"
                ></input>
                <p>Dental</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="seg_dental"
                ></input>
                <p>Auto</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="seg_auto"
                ></input>
                <p>Casa</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="seg_casa"
                ></input>
                <p>De vida</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="seg_vida"
                ></input>
                <p>Para el retiro</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="seg_retiro"
                ></input>

                <p>Gastos de seguro: {resSeguro}</p>
            </div>

            <div>
                <h4>Ahorro</h4>

                <p>Meta</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="aho_meta"
                ></input>
                <p>Inversion</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="aho_inversion"
                ></input>

                <p>Gastos de ahorro: {resAhorro}</p>
            </div>

            <div>
                <h4>Suscripciones</h4>

                <p>HBO</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="sus_hbo"
                ></input>
                <p>Netflix</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="sus_netflix"
                ></input>
                <p>Apple</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="sus_apple"
                ></input>
                <p>Spotify</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="sus_spotify"
                ></input>
                <p>Cable</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="sus_cable"
                ></input>
                <p>Gimnasio</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="sus_gym"
                ></input>

                <p>Gastos de suscripciones: {resSuscripciones}</p>
            </div>

            <div>
                <h4>Deudas</h4>

                <p>Credito educativo</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="deu_cred_edu"
                ></input>
                <p>Prestamos</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="deu_prestamo"
                ></input>
                <p>Tanda</p>
                <input 
                    type="number" 
                    placeholder="Añade el ingreso" 
                    className="form-control"
                    onChange={handleInputChange}
                    name="deu_tanda"
                ></input>

                <p>Gastos de deudas: {resDeudas}</p>
            </div>

            <button onClick={() => setGastosFijos(resultadoGastosFijos)}>Calcular</button>

            <h3>Tus gastos fijos son: {totalGastosFijos}</h3>
        </div>
    )
}

export default GastosFijos;