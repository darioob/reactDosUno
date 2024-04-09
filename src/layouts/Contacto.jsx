const Contacto = () => {
  return (
    <div className="d-flex flex-column align-items-center ">
      <h2>Dejanos tu consulta!</h2>
      <label className="d-flex flex-column align-items-center">Correo:<input className="input" type='email' placeholder='example@example.com' /> </label>
      <label className="d-flex flex-column align-items-center">Descripción:<input className="inputDos" type='Text' /> </label>
    </div>
  )
}

export default Contacto
