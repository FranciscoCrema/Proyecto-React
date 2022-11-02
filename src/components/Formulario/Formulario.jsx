import React, { useState, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { baseDeDatos } from "../../servicios/fireBaseConfig";
import "./formulario.css";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const [orden, setOrden] = useState("");

  const { cart, sumaTotal, borrarTodo } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const orden = {
      buyer: { nombre, apellido },
      items: cart,
      total: sumaTotal(),
      date: serverTimestamp(),
    };

    const todosLosPedidos = collection(baseDeDatos, "ordenes");
    addDoc(todosLosPedidos, orden)
      .then((res) => {
        setOrden(res.id);
        borrarTodo();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const Nombre = (e) => {
    setNombre(e.target.value);
  };

  const Apellido = (e) => {
    setApellido(e.target.value);
  };

  if (orden) {
    return (
      <>
        <h3>Gracias por confiar en nosotros</h3>
        <p>Su codigo de seguimiento es {orden} </p>
      </>
    );
  }

  return (
    <div className="btn-form">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={Nombre}
          value={nombre}
        />
        <input
          type="text"
          placeholder="Apellido"
          onChange={Apellido}
          value={apellido}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
