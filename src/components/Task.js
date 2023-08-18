


const Task = (props) =>{
    return (
    <div style={{backgroundColor: props.completed ? "green" : "white"}}>
        <h2>{props.desc}</h2>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}>Delete</button>
    </div>
    );
}

export default Task;