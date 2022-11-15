import {useState} from 'react'
export default function AddToDo({modifyTask}){
    const [taskValue,setTaskValue] = useState('')
    const [isError,setIsError] = useState(false)
    const [errorMessage,setErrorMessage] = useState("")
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        console.log("inside formsubmit",event)
        const resp = modifyTask("add",taskValue)
        console.log(resp)
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
    return (
        <div className="form">
            <form onSubmit={(event)=>{formSubmitHandler(event)}}>
                <div className="form-group">
                    <input value={taskValue} onChange={(event)=>{handleTaskValChange(event)}}></input>
                    {isError && <p className="error-message">{errorMessage}</p>}
                </div>
                <input disabled={!taskValue} type="submit" className="submit" value="Add Task"></input>
            </form>
        </div>
    )
}