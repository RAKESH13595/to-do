export default function ToDoCard({task,modifyTask}){
    return(
        <div className="todo-card">
            <p className={`task-value ${task.delete ? 'strike-through': '' }`}>{task.value}</p>
            <button onClick={()=>{modifyTask("thrash",task.value)}} className="done-button">Done</button>
            <button onClick={()=>{modifyTask("delete",task.value)}} className="delete-button">Delete</button>
        </div>
    )
}