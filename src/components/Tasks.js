import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {


    // this componenet receives tasks property from app which is list of tasks
    //console.log(items)
    return (
        <>
            
            {tasks.map((item)=>{
                return <Task key ={item.id} task = {item} onDelete={onDelete} onToggle = {onToggle}/>
            })}
            
        </>
    )
}

export default Tasks
