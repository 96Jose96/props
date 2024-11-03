export default function Task( {tasks, markAsCompleted, deleteTask} ) {
    console.log(tasks)
    let lineThrough = (task) =>  ({
        textDecoration: task.completed ? 'line-through' : 'none'
    })

    return (
        <>
            {tasks.map((task) => {
                return(
                    <div className="card" key={task.id}>
                        <li onClick={() => markAsCompleted(task.id)} style={lineThrough(task)} >{task.text}</li>
                        <button type="submit" onClick={() => deleteTask(task.id)}>Eliminar</button>
                    </div>
                ) 
            })}
        </>
    )
    
    
}
