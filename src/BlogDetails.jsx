import React from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    fail,
    pending,
  } = useFetch(" http://localhost:8000/blogs/" + id);
  const history = useHistory();
  const handleClick = () => {
    fetch(" http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      {fail && <div>{fail}</div>}
      {pending && <div>Loading....</div>}
      {blog && (
        <article>
          <h2 className=" text-xl text-red-400 mb-3">{blog.title}</h2>
          <p className=" my-5 ">Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button
            onClick={handleClick}
            className=" bg-red-500 text-white border-0 mt-3 p-2 rounded-lg cursor-pointer"
          >
            Delete Blog
          </button>
        </article>
      )}
    </div>
  );
}
