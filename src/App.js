import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Lista from "./components/Lista";

const App = () => {
  const [episodios, setEpisodios] = useState([]);
  const [data, setData] = useState({});
  const [busqueda, setBusqueda] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodios(data.results);
        setData(data);
      });
  }, [busqueda]);

  const handleChange = (e) => setBusqueda(e.target.value);

  const handleClickAbrirModal = () => setMostrarModal(true);

  const handleClickCerrarModal = () => setMostrarModal(false);

  console.log("Se renderizó el componente App");
  return (
    <div>
      <button onClick={handleClickAbrirModal}>Mostrar Modal</button>
      {mostrarModal && (
        <Modal
          handleClickCerrarModal={handleClickCerrarModal}
          episodios={episodios}
        />
      )}
      <div>
        <label>Busca un episodio de Rick y Morty</label>
        <input type="text" onChange={handleChange} />
      </div>
      {/* Cantidad de paginas: {data && data.info && data.info.pages} */}
      Cantidad de paginas: {data?.info?.pages}
      {episodios.map((episodio) => (
        <h2 key={episodio.id}>{episodio.name}</h2>
      ))}
      <Lista />
    </div>
  );
};

export default App;
