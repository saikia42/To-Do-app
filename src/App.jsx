import './App.css'
import "@fontsource/ubuntu"; 
import "@fontsource/ubuntu/300.css"; 
import "@fontsource/ubuntu/500.css"; 
import { SiTodoist } from "react-icons/si";
import TodoEnv from './components/TodoEnv';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Your title',
      description: 'Your description',
      completed: false
    }
  ])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // saving the tasks to the local storage of the website whenever the task state changes
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

  // getting the tasks from the localstorage (on the first loading)
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem('tasks'));
    
    if(storedTodos){
      setTasks(storedTodos)
    }
  },[])


  // adding the new task
  const addTask = () => {
    const newTask = {
      title,
      description,
      completed: false
    };
    
    // adding the new task to the tasks array
    if(title != '' && description != ''){
      setTasks(prevTasks => [...prevTasks, newTask]);
      setTitle('');
      setDescription('');
    }
  };

  // delete task 
  const deleteTask = (index) =>{
    const newTasks = tasks.filter((task,i)=> i !== index)
    setTasks(newTasks)
  }

  const markAsDone = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
  
    setTasks(newTasks);
  };
  

  return (
    <div className='container'>
      <div className="header">
        <div>Todo List</div>
        <SiTodoist />
      </div>

      <div className="inputContainer">
        <input type="text" placeholder='Enter Title' value={title} onChange={(e)=> setTitle(e.target.value)} />
        <input type="text" placeholder='Give discription' value={description} onChange={(e)=> setDescription(e.target.value)} />
        <div className="addbtn" onClick={addTask}>Add Todo</div>
      </div>

      <div className="todoContainer">
        <div className="todoInnerContainer">
          {
            tasks.map((task,index)=>(
              <TodoEnv todo={task} index={index} deleteTodo={deleteTask} markAsDone={markAsDone} />
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default App
