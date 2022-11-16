import React from 'react';
import ToDoCard from '../todo-card/ToDoCard.js'
export default function ListToDo({listOfTasks,modifyTask}){
    return (
        <div>
            {listOfTasks.length > 0 && listOfTasks.map(task=>{
                return <ToDoCard key={task.value} task={task} modifyTask={modifyTask}></ToDoCard>
            })}
        </div>
    )
}