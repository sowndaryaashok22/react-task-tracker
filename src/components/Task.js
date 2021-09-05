import React from 'react'
import {FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {

    //console.log(task);

    // const divClassName = task.reminder ? 'task reminder' : 'task'
   
    // const getClassName = () => 
    // {
    //     let classes = 'task ';
    //     classes = task.reminder ? classes + 'reminder' : classes;
    //     console.log('classes =' ,classes)
    //     return classes;
    // }

    return (
        <div className ={task.reminder ? 'task reminder' : 'task'} onDoubleClick = {() => onToggle(task.id)}>
            <h3>
                {task.taskName}
                <FaTimes 
                    style={{color : 'red' , cursor : 'pointer'}}
                    onClick = {() =>onDelete(task.id) 
                    }
                />

            </h3>   
            <p>{task.day}</p>     
        </div>
    )
   
    
}



export default Task
