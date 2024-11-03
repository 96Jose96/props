import './App.css'
import { useState } from 'react';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm'


const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1
    console.log(newId)

    const newTask = {
      id: newId,
      text: text,
      completed: false  
    }
    setTasks([...tasks, newTask])
  }

  const markAsCompleted = (id) => {
    const updateTasks = tasks.map((task) => 
        task.id === id ? {...task, completed: !task.completed} : task
    )
    setTasks(updateTasks)
}

const deleteTask = (id) => {
    const updateTasks = tasks.filter(task =>task.id !== id)
    setTasks(updateTasks)
}

  return (
    <ul>
      <AddTaskForm addTask={addTask} />
      <Task tasks={tasks} markAsCompleted={markAsCompleted} deleteTask={deleteTask} />
    </ul>
  );
};

export default App;
