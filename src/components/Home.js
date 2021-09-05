import React from 'react';
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Header from './Header';
import {useState, useEffect} from 'react';

const Home = () => {
    const [showAddTask, setShowAddTask] = useState(false)

  const [dataChanged, setDataChanged] = useState(false)


  const [items, setItems] = useState([])

  useEffect(()=>{

    console.log('useeffect called')
    const getData = async () => {
      const dataFromServer = await  fetchData();
    
      setItems(dataFromServer);
    }

    getData();
    

  }, [dataChanged])
  //or without using dataChanged it should be like   },[])

  const fetchData = async () => {
    console.log('async function called');
    const data = await fetch("http://localhost:5000/items");
    const result = await data.json();
    console.log(result);
    return result;

  }

  

  //delete item function
  const handleDelete = async (id) =>{
    //console.log('delete clicked', id)
    
    await fetch(
      `http://localhost:5000/items/${id}`,
      {
        method : 'DELETE'
      }
      )
   

    const filtertedItems = items.filter((item) => {
      return item.id !== id
    })
    
    setItems(filtertedItems)
  }


  const fetchTask = async (id) => {
    const data = await fetch(`http://localhost:5000/items/${id}`);
    const result = await data.json();
    console.log('result',result);
    return result;

  }

  // toggle reminder
  const toggleReminder = async (id) => {
    
    const itemToBeChanged = await fetchTask(id);
    console.log('changed',itemToBeChanged)
    const changedItem = {
      ...itemToBeChanged,
      reminder : !itemToBeChanged.reminder
    }

    const res = await fetch(
      `http://localhost:5000/items/${id}`,
      {
        method : 'PUT',
        headers : {
          'Content-type' : 'application/json' 
        },
        body : JSON.stringify(changedItem)
        }
      )

      const returnData = await res.json();


      // const newItems = items.map(item => {
      //   if(item.id == id){
      //     item.reminder = !item.reminder
      //   }
      //   return item 
      // })

      // setItems(newItems)
      //or 
      setDataChanged(!dataChanged)
    
  }

  // add task
  const onAdd = async (task) => {

    const res = await fetch(
      "http://localhost:5000/items",
      {
        method : 'POST',
        headers : {
          'Content-type' : 'application/json' 
        },
        body : JSON.stringify(task)

      }
    )

    const data = await res.json()
    setItems([...items, data])


    // console.log('new task initial form', task);
    // const id = Math.floor(Math.random() *10000)+1
  
    // const newTask = {
    //   ...task,
    //   id
    // }

    // const newItems = [
    //   ...items,
    //   newTask
    // ]

    // setItems(newItems)

    //setItems([...items, { ...task, id}])

    // console.log('new task after addding id', newItems)
    
  } 

  //toggling add task selection(i.e add button)
  const toggleAddTask = () =>{
    console.log('add button is clicked')
    setShowAddTask(!showAddTask)
  }
    return (
        <div>
            <Header title ='Task-Tracker' onAddToggle = {toggleAddTask} showAdd= {showAddTask}/>
            {/* show beadd form only when showAddTask is true */}
            {showAddTask &&  <AddTask  onAdd = {onAdd}/>}
            {items.length > 0 ? 
                <Tasks tasks = {items} onDelete = {handleDelete}  onToggle = {toggleReminder}/> 
                : 
                <p>No Tasks</p>}
        </div>
    )
}

export default Home
