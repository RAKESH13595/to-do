import React from 'react'
import { Button } from 'react-bootstrap';
import { IconName } from "react-icons/md";
import { MdDone, MdOutlineCancel } from "react-icons/md"

export default function ToDoCard({ task, modifyTask }) {
    return (
        <div className="container">
            <table class="table">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <span className={`task-value ${task.delete ? 'strike-through' : ''}`}>{task.value}</span>
                        <div className="button-right">
                            <Button variant="outline-success" onClick={() => { modifyTask("thrash", task.value) }}>
                                <MdDone /></Button>
                            <Button variant="outline-danger" onClick={() => { modifyTask("delete", task.value) }}>
                                <MdOutlineCancel /></Button>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}