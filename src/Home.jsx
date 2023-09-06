import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home() {
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((chooser) => chooser.id !== id);
  //   setBlogs(newBlogs);
  // }
  const {
    data: blogs,
    pending,
    fail,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div>
      <div className="flex justify-evenly flex-col">
        {fail && <div>{fail}</div>}
        {pending && <div>Loading....</div>}
        {blogs && <BlogList blogProp={blogs} title="All blogs"></BlogList>}
        {blogs && (
          <BlogList
            blogProp={blogs.filter((chooser) => chooser.author === "mario")}
            title="Mario's blogs "
          ></BlogList>
        )}
        {/* <button className=' bg-gray-800 text-white border-2 border-black rounded-md hover:bg-slate-100 hover:text-black'  onClick={() => setName('luigi')}> Change Name</button>
          <p>{name}</p> */}
      </div>
    </div>
  );
}
