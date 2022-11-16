import './App.css';
import React from 'react';
import Header from './components/header/Header';
import AddToDo from './components/add-todo/AddToDo';
import ListToDo from './components/list-todo/ListToDo';
import {useState} from 'react'
function App() {
  const [listOfTasks,setListOfTasks] = useState([])
  const title = "To-Do List"
  const modifyTask=(operation,taskValue) =>{
    try {
      console.log(listOfTasks,taskValue)
      switch (operation) {
        case "add": {
          const isPresent = listOfTasks.find(task=>task.value === taskValue && !task.delete)
          if (isPresent) {throw "Duplicate task"}
          const listOfTask = [...listOfTasks]
          listOfTask.push({value: taskValue, delete: false})
          setListOfTasks(listOfTask)
          break;
        }
        case "thrash": {
          const index = listOfTasks.findIndex(task=>task.value === taskValue);
          if (index < 0) { throw "Task not found."}
          const listOfTask = [...listOfTasks]
          listOfTask[index].delete = true
          setListOfTasks(listOfTask)
          break;
        }
        case "delete": {
          const index = listOfTasks.findIndex(task=>task.value === taskValue);
          if (index < 0) { throw "Task not found."}
          const listOfTask = [...listOfTasks]
          listOfTask.splice(index,1)
          setListOfTasks(listOfTask)
          break;
        }
        case "clear" :{
          setListOfTasks([])
          break;
        }
        default: {
          break;
        }
      }
      return {status: 200, message: `${operation} operation successul`}
    }
    catch(error) {
      console.log("Error: ",error)
      return {status: 400, error: error}
    }
  }
  return (
    <div className="App">
       <div className="container">
      <Header title={title}></Header>
      <AddToDo modifyTask={modifyTask}></AddToDo>
      <ListToDo listOfTasks={listOfTasks} modifyTask={modifyTask}></ListToDo>
      </div>
    </div>
  );
}

export default App;
