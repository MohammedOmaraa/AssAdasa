import { useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import data from "../../posts.json";
function Blog() {
  const posts = data.posts;
  const categories = data.categories;
  const [category, setCategory] = useState("");

  const filteredPosts =
    category == "" ? posts : posts.filter((p) => p.category == category);
  const blogPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredPosts.length / blogPerPage);
  const startIndex = (currentPage - 1) * blogPerPage; // 1 => 0 , 2 => 6
  const endIndex = startIndex + blogPerPage; // 1 => 7 , 2 => 13
  const paginationPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <>
      <ul className="justify-center gap-3 flex">
        <li
          className={`cursor-pointer p-3 rounded-full ${category == "" ? "bg-orange-500" : "bg-gray-400"}`}
          onClick={() => setCategory("")}
        >
          جميع المقالات
        </li>
        {categories.map((c) => (
          <li
            className={`cursor-pointer p-3 rounded-full ${c.name == category ? "bg-orange-500" : "bg-gray-400"}`}
            onClick={() => setCategory(c.name)}
          >
            {c.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-center">
        {paginationPosts.map((post) => (
          <div className="w-full md:w-1/2 lg:w-1/3">
            <BlogCard data={post} />
          </div>
        ))}
      </div>

      {/* pagination */}
      <ul className="flex justify-center mb-5 gap-3">
        {Array.from({ length: totalPages }).map((_,id) => (
          <li className="rounded-lg text-white size-8 bg-gray-700 flex justify-center items-center" onClick={()=>{setCurrentPage(id+1)}}>
            {id+1}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Blog;
