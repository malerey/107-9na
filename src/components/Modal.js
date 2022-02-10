import { useEffect, useState } from "react";

const Modal = ({ handleClickCerrarModal }) => {
  const [episodios, setEpisodios] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/")
      .then((res) => res.json())
      .then((data) => console.log(data));

    // el retorno de la funcion del use effect es optativo
    // si retorno algo, debe ser una FUNCION
    // esa funcion se llama cleanup-function o funcion de limpieza
    // y sirve para cancelar los fetch (metodos asincronos)
    return () => setEpisodios([]);
  }, []);

  console.log("se renderizo Modal");
  console.log(episodios);

  // CICLO DE VIDA
  // 1. montarse en el DOM
  // 2. Cuando recibe (o se modifican) las props
  // 3. Cuando se desmonta

  return (
    <div>
      <h1>Hola, soy un modal</h1>
      <button onClick={handleClickCerrarModal}>Cerrar Modal</button>
    </div>
  );
};

export default Modal;
