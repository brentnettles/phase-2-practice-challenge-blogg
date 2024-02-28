import React from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({blogPosts}) {
  return (
    <div className="blog-container">
      {blogPosts.map((post)=> (
      <BlogPost
      key={post.id}
      author={post.author}
      title={post.title} 
      article={post.article}
      isRead={post.isRead}
      id={post.id}
    />
      ))}
    </div>
  );
}

export default BlogPostContainer;
