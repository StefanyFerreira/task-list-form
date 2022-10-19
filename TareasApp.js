import React from "react";
import AgregarTarea from "./components/AgregarTarea";
const ListaDeTareas = [
  {
    id: 1,
    Tarea: "Arreglar habitación",
    imgUrl:
      "https://png.pngtree.com/png-vector/20190826/ourmid/pngtree-bed-png-image_1697749.jpg",
    imgAlt: "Tarea 1",
  },
];

const TareasApp = () => {
  const [task, addTask] = AgregarTarea(ListaDeTareas);

  return (
    <div>
      <button
        onClick={() =>
          addTask({
            id: 1,
            Tarea: "Arreglar habitación",
            imgUrl:
              "https://png.pngtree.com/png-vector/20190826/ourmid/pngtree-bed-png-image_1697749.jpg",
            imgAlt: "Tarea 1",
          })
        }
      >
        Add
      </button>
      {console.log(addTask.id)};
    </div>
  );
};

export default TareasApp;
