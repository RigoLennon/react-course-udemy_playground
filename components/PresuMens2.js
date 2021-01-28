import React, { useState } from 'react'

const Example = () => {

  const [datos, setDatos] = useState({
    val1: 0,
    val2: 0,
    val3: 0
  });

  const [res, setResultado] = useState(0)

  const handleInputChange = (e) => {
    //console.log(e.target.name)
    console.log(e.target.value)
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  var val1int = parseInt(datos.val1, 10);
  var val2int = parseInt(datos.val2, 10);
  var val3int = parseInt(datos.val3, 10);

  const calc = val1int - val2int + val3int;

  return (
    <div>
      <h3>Añadir gastos</h3>
      <div className="col-md-3">
        <input
          type="number"
          placeholder="Añade el ingreso"
          className="form-control"
          onChange={handleInputChange}
          name="val1"
        ></input>
      </div>
      <div className="col-md-3">
        <input
          type="number"
          placeholder="Añade el gasto"
          className="form-control"
          onChange={handleInputChange}
          name="val2"
        ></input>
      </div>
      <div className="col-md-3">
        <input
          type="number"
          placeholder="Añade el gasto"
          className="form-control"
          onChange={handleInputChange}
          name="val3"
        ></input>
      </div>
      <button onClick={() => setResultado(calc)}>Calcular</button>

      <h3>Tus gastos son: {res}</h3>
    </div>
  )
}

export default Example;