import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function BlogList({ blogProp, title }) {
  // const blogs = props.blogProp;
  // const title = props.title;

  return (
    <div>
      <h2 className="text-xl font-semibold m-2">{title}</h2>
      {blogProp.map((chooser) => (
        <div
          className=" pt-3 px-4 mt-5 m-0  border-b-2 border-b-white hover:shadow-md"
          key={chooser.id}
        >
          <Link to={`/blogs/${chooser.id}`}>
            <h2 className=" text-xl text-red-400 mb-2">{chooser.title}</h2>
            <p>Written By {chooser.author}</p>
          </Link>
          {/* <button className=' bg-gray-800 text-white border-2 border-black rounded-md hover:bg-slate-100 hover:text-black' onClick={() => handleDelete(chooser.id)}> Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
}
