import { useState } from "react"

const AddTask = ({onAdd}) => {

    const [taskDescription, setTaskDescription] =  useState('')
    const [dayTime, setDayTime] =  useState('')
    const [taskReminder, setTaskReminder] =  useState(false)

    const onSumbitTask = (e) => {

        e.preventDefault()

        if(!taskDescription){
            alert (' add task description ')
            return
        }
        if(!dayTime){
            alert (' add day and time ')
            return
        }

        onAdd({
            taskName : taskDescription,
            day :dayTime,
            reminder :taskReminder
        })
        setTaskDescription('')
        setDayTime('')
        setTaskReminder(false)

    }

   

    return (
        <form className ='add-form' onSubmit={onSumbitTask}>
            <div className='form-control'>
                <label>Task</label>
                <input type ='text' placeholder = 'add task'
                    value={taskDescription}
                    onChange={(e) =>{
                        setTaskDescription(e.target.value)
                    }} />
                <label>Day & Time </label>
                <input type ='text' placeholder = 'add day & time'
                     value={dayTime}
                     onChange={(e) =>{
                         setDayTime(e.target.value)
                     }}/>
                <div className='form-control form-control-check'>
                    <label> Set Reminder</label>
                    <input type ='checkbox' 
                     value={taskReminder}
                     checked= {taskReminder}
                     onChange={(e) => {
                         setTaskReminder(e.currentTarget.checked)
                     }}/>
                </div>
                <input type= 'submit' value= 'submit' className='btn btn-block' />

        
            
            </div>
        </form>
    )
}

export default AddTask
