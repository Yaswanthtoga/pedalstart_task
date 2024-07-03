import Task from "../components/Task.js";

function Home() {
  return (
    <>
        <div className='p-[3em] flex flex-wrap'>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </div>
    </>
  )
      
}

export default Home;
