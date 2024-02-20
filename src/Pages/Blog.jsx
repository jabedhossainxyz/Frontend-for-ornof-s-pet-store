import React from "react";
import "./CSS/Blog.css";
const Blog = () => {
  return (
    <div className="blog">
      <h1>Blogs Page</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IG5cgtVJxjM?si=WeJYLZUJsWGTenWv"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Blog;
