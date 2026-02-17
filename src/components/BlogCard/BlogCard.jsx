import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ data }) {
  const { image, id, title, category, slug } = data;
  return (
    <>
      <div className="card p-10">
        <div className="cardImg">
          <h1>{id}</h1>
          <img src={image} alt="" className="w-full" />
          <h2>{title}</h2>
          <p>{category}</p>
          <Link to={`/blogDetails/${slug}`}>
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
