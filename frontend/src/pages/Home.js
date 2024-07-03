import Task from "../components/Task.js";
import { useEffect, useState } from 'react';
import axios from "axios";

function Home() {

  const [tasks,setTasks] = useState([]);
  useEffect(()=>{
    const fetchTasks = async ()=>{
      const res = await axios.get("/get-task");
      setTasks([...res.data.data]);
    }
    fetchTasks();
  },[tasks]);
  
  return (
    <>
        <div className='p-[3em] flex flex-wrap'>
            {
              tasks.map((task)=><Task task={task} key={task._id}/>)
            }
        </div>
    </>
  )
      
}

export default Home;
