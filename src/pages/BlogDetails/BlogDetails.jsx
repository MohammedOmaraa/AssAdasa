import { useParams } from "react-router-dom";
import data from "../../posts.json";
function BlogDetails() {
  const apiRes = data;
  const { slug } = useParams();

  const { image, id, title } = apiRes.posts.find((post) => post.slug == slug);
  return (
    <>
      <img src={image} className="w-1/2 mx-auto" alt="" />
      <h1>{id}</h1>
      <p>{title}</p>
    </>
  );
}

export default BlogDetails;
