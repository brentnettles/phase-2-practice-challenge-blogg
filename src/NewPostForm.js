import React, { useState, useEffect } from "react";

function NewPostForm({ blogPosts, setBlogPosts, showForm, onSubmit }) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  
  function handleSubmit(e) {
    e.preventDefault();
    if (!author || !title || !article) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Form submitted!");
    const newPost = { author, title, article };
  
    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setBlogPosts([...blogPosts, newPost]);
        setAuthor("");
        setTitle("");
        setArticle("");
        onSubmit();
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }

  // useEffect(() => {
  //   // Effect to re-render blog list when blogPosts state changes
  //   console.log("Blog posts updated:", blogPosts);
  // }, [blogPosts]);

  return (
    <div className="form">
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <textarea
            rows="10"
            cols="60"
            placeholder="Write your post"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          />
          <input
            className="submit-button"
            style={{ paddingBottom: "25px" }}
            type="submit"
            value="Submit"
          />
        </form>
      )}
    </div>
  );
}

export default NewPostForm;
