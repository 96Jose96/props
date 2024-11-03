import { useState } from "react"

export default function AddTaskForm( {addTask} ) {
    const [input, setInput] = useState('')

    const handleAddTask = (e) => {
        e.preventDefault()

        if(input.trim()) {
            addTask(input)
            setInput('')
        }
    }

    const updateInput = (e) => {
        setInput(e.target.value)
    }


  return (
    <form onSubmit={handleAddTask}>
        <input
            type="text"
            value={input}
            onChange={updateInput}
            placeholder="Añadir tarea"
        />
        <button type="submit">Añadir</button>
    </form>
  )
}
