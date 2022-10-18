import { useEffect } from "react";
import { useState } from "react";
function Formulario() {
  const [task, setTask] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [errorLongitud, setErrorLongitud] = useState(true);

  useEffect(() => {
    setDescripcion("");
  }, [task]);

  useEffect(() => {
    if (task.length < 3) {
      setErrorLongitud(true);
    } else {
      setErrorLongitud(false);
    }
  }, [task]);

  return (
    <>
      <form>
        <label htmlFor="input-task" className="form-label">
          <button
            onClick={() => {
              if (descripcion) {
                console.log("Añadida");
              } else {
                alert("Falta la descripción");
              }
            }}
          >
            Añadir tarea
          </button>
        </label>
        <input
          placeholder="Escribe tú proxima Tarea"
          type=""
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        {errorLongitud && (
          <p style={{ color: "red" }}> La longitud debe ser mayor a 3 </p>
        )}
      </form>
      <form>
        <label htmlFor="input-descripcion" className="form-label">
          <h5>Añadir una descripción</h5>
        </label>
        <input
          placeholder="Añade una descripción"
          type="text"
          value={descripcion}
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default Formulario;
