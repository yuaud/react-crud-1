import { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [newTask, setNewTask] = useState({});
  const [tasks, setTasks] = useState([]);

  const handleNewTask = (e) =>{
    let inputTask = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      desc: e.target.value,
      completed: false
    }
    setNewTask(inputTask);
  }

  const handleTasks = () =>{
    setTasks([...tasks,newTask]);
  }

  const completeTask = (taskId) =>{
    setTasks(tasks.map((task) =>{
      return task.id === taskId ? {...task, completed: !task.completed} : task;
    }));
  }

  const deleteTask = (taskId) =>{
    setTasks(tasks.filter((task) => {
      return task.id !== taskId;
    }))
  }

  console.log(newTask);
  return (
    <div className="App">
      <div className='addTask'>
        <p>Add a new task: </p>
        <input type='text' placeholder='Task' onChange={handleNewTask}/>
        <button onClick={handleTasks}>Add Task</button>
        <button onClick={() => console.log(tasks)}>get tasks</button>
      </div>
      <div className='tasks'>
        {tasks.map((task) => {
          return(
            <Task
            id={task.id}
            desc={task.desc}
            completed={task.completed}
            completeTask={completeTask}
            deleteTask={deleteTask}
            />
          );
        })}
      </div>

    </div>
  );
}

export default App;
