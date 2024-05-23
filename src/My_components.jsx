import React,{useState} from 'react';


const My_components=()=>{

    const[tasks,setTask]=useState([]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function handleAddTask(){

        if(newTask.trim()!==""){
            setTask(t=>[...t,newTask]);
            setNewTask("");
        } 
    }
    
    function handleKeyPress(event){
        if(event.key ==='Enter'){
            handleAddTask();
        }
    }

    function handleDeleteTask(index){
        const updatedTasks = tasks.filter((_,i)=>i!==index);
        setTask(updatedTasks);
    }

    function handleMoveUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    function handleMoveDown(index){
        if(index<tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return(
        <div className='to-do-list'>
            <h1>Prioritize your Work</h1>

            <input type="text" value={newTask} placeholder='Enter your task....' onChange={(event)=>handleInputChange(event)} onKeyDown={handleKeyPress}/>
            <button onClick={handleAddTask} className='add-button'>Add</button>
            <ul>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <span className='buttons'>
                            <button onClick={()=>handleDeleteTask(index)} className='delete-button'>Delete</button>
                            <button onClick={()=>handleMoveUp(index)}  className='move-button'>👆</button>
                            <button onClick={()=>handleMoveDown(index)} className='down-button'>👇</button>
                        </span>
                        
                    </li>
                )}
            </ul>
        </div>
    );
}


export default My_components