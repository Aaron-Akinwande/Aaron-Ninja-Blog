import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import configData from "./config.json";
// import process from 'process'

export default function Home() {
  // window.process = { browser: true, env: { ENVIRONMENT: 'BROWSER' } };
  // const { data: blogs, pending, fail } = useFetch(configData.SERVER_URL);
  const { data: blogs, pending, fail } = useFetch(import.meta.env.VITE_SERVER_URL);
  console.log(import.meta.env.VITE_USER_ID)
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
