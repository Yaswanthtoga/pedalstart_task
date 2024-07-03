// import { useState, useEffect } from "react";


const Task = () => {
    return (
       
        <div className="rounded-md bg-[#050F0F] text-white p-8 m-4 ml-2 md:ml-4 font-poppin w-fit hover:scale-105 duration-200 cursor-pointer">
        <div className="flex gap-2">
          <h1 className="font-serif font-bold">Task-1</h1>
        </div>
        <h1 className="mt-[1em] ml-1 text-gray-600">Description</h1>
        <p className="mt-2 w-[24em]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
            

    );
};

export default Task;