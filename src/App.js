import {useState} from 'react';
import  AddTaskForm from './Components/AddTaskForm';
import ToDo from "./Components/ToDo.jsx";
import UpdateForm from './Components/UpdateForm.jsx';



import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

function App() {
  // TASK ToDo State//
const[toDo,setToDo]=useState([
  
  {id:2, title:"Task 2", status:false},
  {id:3, title:"Task 3", status:false},
  {id:1, title:"Task 1", status:false}
]);

    //temp state
    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData]= useState('');
  // ADD TASK
  const addTask = ()=>{
      if (newTask){
        let num = toDo.length + 1;
        let newEntry={id: num , title: newTask , status: false}
        setToDo([...toDo, newEntry]);
        setNewTask('');
  }
}

   // DELETE TASK
   const deleteTask = (id)=>{
    let newTasks = toDo.filter(task=>task.id!==id)
    setToDo(newTasks);
   }

    // Mark TASK DONE  or  Work Completed 
  const markDone = (id)=>{
    let newTasks = toDo.map(task=>{
      if(task.id===id){
        return({
          ...task, status:!task.status})
        
      }
      return task;
    })
    setToDo(newTasks);
  }

   // Cancel OR UPDATE TASK
   const cancelUpdate = (id)=>{
    setUpdateData('');
   }

    // CHANGE TASK FOR UPDATE
  const changeTask = (e)=>{
    let newEntry = {
      id:
      updateData.id,
      title : e.target.value,
      status : updateData.status ? true : false

    }
  setUpdateData(newEntry);
  }

   // UPDATE TASK
   const updateTask = ()=>{
    let filterRecords = [...toDo].filter(task=>task.id!==updateData.id);
    let updatedObject = [...filterRecords , updateData]
    setToDo(updatedObject);
    setUpdateData('')

   }
  


  return (
    <div className="container App">
      <br /> <br />

      <h1>TODO List App</h1>

      <br />
          {/* Update Task */}  
        {updateData && updateData ?(
        <UpdateForm
        updateData = {updateData} 
        changeTask = {changeTask}
        updateTask = {updateTask}
        cancelUpdate = {cancelUpdate}
        
        />
      ) : (
          <AddTaskForm
          newTask ={ newTask}
          setNewTask={setNewTask}
          addTask={addTask}
      />
      )}
          
     {/*dispaly todos*/}
      {toDo && toDo.length?'':'No Tasks.....'}
        <ToDo
        toDo = {toDo}
        markDone = {markDone} 
        setUpdateData = {setUpdateData}
        deleteTask = {deleteTask}
        
        
        />

    </div>
  );
}

export default App;
