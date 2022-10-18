import { useState } from "react";

const EstadoDeLaTarea = () => {
  const [hecha, setHecha] = useState(true, false);
  const pendiente = () => {
    setHecha("Pendiente");
  };
  const realizada = () => {
    setHecha("Realizada");
  };
  return (
    <>
      <div>
        <h1 className="texto">{hecha}</h1>

        <button onClick={pendiente} className="botonuno">
          False
        </button>

        <button onClick={realizada} className="botondos">
          True
        </button>
      </div>
    </>
  );
};
export default EstadoDeLaTarea;
