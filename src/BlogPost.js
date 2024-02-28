import React, { useState } from "react";

function BlogPost({title, author, article, isRead, id}) {
  const [read, setRead] = useState(isRead); 

  const toggleRead = () => {
    setRead(!read);
  
    fetch (`http://localhost:4000/blogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({isRead: !read})
    })
      .then((res)=>res.json())
      .then((data)=>console.log(data))
  
  };


console.log(title)
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{title}</h3>
          <button className="read-button" onClick={toggleRead}>
            {read ? "Read" : "Unread"}
          </button>
        </div>
        <p> {author}</p>
      </div>
      <p>{article}</p>
    </div>
  );
}

export default BlogPost;
