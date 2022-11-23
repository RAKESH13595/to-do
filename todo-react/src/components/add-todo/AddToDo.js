import React from 'react'
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddToDo({modifyTask}){
    const [taskValue,setTaskValue] = useState('')
    const [isError,setIsError] = useState(false)
    const [errorMessage,setErrorMessage] = useState("")
    const formSubmitHandler=(event,task="add")=>{
        event.preventDefault();
        const resp = modifyTask(task,taskValue)
        if (resp.status === 200) {
            setTaskValue('')
            setIsError(false)
            setErrorMessage("")
        }else {
            setErrorMessage(resp.error)
            setIsError(true)
        }
    }
    const handleTaskValChange=(event)=>{
        setIsError(false)
        setErrorMessage("")
        setTaskValue(event.target.value)
    }
    const handleClearAll=(e)=>{
        if (window.confirm("Do you want to continue to clear all tasks?")) {
            formSubmitHandler(e,"clear")
        }
    }
    return (
        <div className="form">
            <form onSubmit={(e)=>formSubmitHandler(e)}>
                <div className="form-group">
                    <h3>Add Todo</h3>
                    <input class="to-do-text" type="text" placeholder='Add new todo' value={taskValue} onChange={handleTaskValChange}/>
                    {isError && <p className="error-message">{errorMessage}</p>}
                </div>
                <div className="form-group">
                <button disabled={!taskValue} type="submit" className="submit">Add Task</button>
                <button onClick={(e)=>handleClearAll(e)} className="submit">Clear All</button>
                </div>
            </form>
            
        </div>
    )
}