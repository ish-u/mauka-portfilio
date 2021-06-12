import React from "react";
import blogPost from "../static/blogPost.png";

const BlogPost = ({ title, content }) => {
  return (
    <div className="blogPost">
      <img alt="blog" src={blogPost} className="img-fluid"></img>
      <div>
        <span>{title}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>{content}</p>
      </div>
      <div>
        <a href="https://www.github.com/ish-u">Read More</a>
      </div>
    </div>
  );
};

export default BlogPost;
