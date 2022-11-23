import React from 'react'
import { Button } from 'react-bootstrap';
import { MdDone, MdOutlineCancel } from "react-icons/md"

export default function ToDoCard({ task, modifyTask }) {
    return (
        <div className="container-todo-card">
                        <div className={`task-value ${task.delete ? 'strike-through' : ''}`}>{task.value}</div>
                        <div className="button-right">
                            <Button variant="outline-success" onClick={() => { modifyTask("thrash", task.value) }}>
                                <MdDone /></Button>
                            <Button variant="outline-danger" onClick={() => { modifyTask("delete", task.value) }}>
                                <MdOutlineCancel /></Button>
                        </div>
        </div>
    )
}