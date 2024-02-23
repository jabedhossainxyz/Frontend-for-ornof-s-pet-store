import React, { useEffect, useState } from "react";
import "./CSS/Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from your backend API
    fetch("http://localhost:4000/uploadedblogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  return (
    <div className="blog">
      <h1 className="blog-heading">Blogs Page</h1>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-item">
            <h2 className="blog-title">{blog.title}</h2> 
            <h4>{blog.author}</h4>
            <iframe src={blog.videoLink} title={blog.title} />
            <h5 className="video-link">
              Video Link:{" "}
              <a
                href={blog.videoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {blog.videoLink}
              </a>{" "}
            </h5>
            <h6 className="blog-date">Upload Time: {blog.createdAt}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
