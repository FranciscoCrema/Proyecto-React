import React, { useState } from "react";
import "./contacto.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, email, mensaje });
  };

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMensaje = (e) => {
    setMensaje(e.target.value);
  };

  return (
    <div>
      <section id="contacto">
        <h3 className="titulo-seccion">Contactanos ahora</h3>
        <div className="contenedor-form">
          <form action="" onSubmit={handleSubmit}>
            <div className="fila mitad">
              <input
                type="text"
                placeholder="Nombre Completo"
                onChange={handleNombre}
                className="input-mitad"
                value={nombre}
              />
              <input type="text" placeholder="Email" onChange={handleEmail} className="input-mitad" value={email} />
            </div>
            <div className="fila">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Tu Mensaje"
                onChange={handleMensaje}
                className="input-full"
                value={mensaje}
              ></textarea>
            </div>
            <input
              type="submit"
              value="Enviar Mensaje"
              className="btn-enviar"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
