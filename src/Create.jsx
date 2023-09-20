import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import configData from "./config.json";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [pend, setPend] = useState(false);
  const history = useHistory();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, body, author };

    setPend(true);

    fetch(import.meta.env.VITE_SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      console.log("Blog Has Been Added");
      setPend(false);
      history.push("/");
    });
  };

  return (
    <div className=" max-w-md my-0 m-auto text-center">
      <h2 className=" font-bold text-xl text-red-400 mb-8"> Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label className=" text-left block">Blog Title: </label>
        <input
          type="text"
          required
          // value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" w-full py-2 px-3 my-3 mx-0 border border-gray-500 rounded"
        />

        <label className=" text-left block">Blog Body: </label>
        <input
          type="text"
          required
          // value={body}
          onChange={(e) => setBody(e.target.value)}
          className=" h-20 w-full py-2 px-3 my-3 mx-0 border border-gray-500 rounded"
        />

        <label className=" text-left block">Blog Author: </label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full py-2 my-1 border border-gray-500 rounded"
        >
          <option value="Mario">Mario</option>
          <option value="Luigi">Luigi</option>
        </select>

        {!pend && (
          <button className=" bg-red-500 text-white border-0 mt-3 p-2 rounded-lg cursor-pointer">
            Add Blog
          </button>
        )}
        {pend && (
          <button
            disabled
            className=" bg-red-500 text-white border-0 mt-3 p-2 rounded-lg cursor-pointer"
          >
            Adding Blog...
          </button>
        )}

        {/* <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p> */}
      </form>
    </div>
  );
}
