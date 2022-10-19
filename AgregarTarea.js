import { useState } from "react";

const AgregarTarea = (ListaDeTareas) => {
  const [task, setTask] = useState(ListaDeTareas);
  const addTask = (newTask) => {
    setTask([...task, newTask]);
    console.log(newTask.id);
  };
  return [task, addTask];
};

export default AgregarTarea;
