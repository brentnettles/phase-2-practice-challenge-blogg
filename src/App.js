import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";
import React, { useEffect, useState } from "react";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [showForm, setShowForm] = useState(false); 
  const [filteredBlogPosts, setFilteredBlogPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
        setFilteredBlogPosts(data); // Initialize filtered posts with all posts
      });
  }, []);

  const handleSubmit = () => {
    console.log("Form Submitted");
    fetch("http://localhost:4000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
        setFilteredBlogPosts(data);
      });
  };

  const handleSearch = (query) => {
    const filteredPosts = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.author.toLowerCase().includes(query.toLowerCase()) ||
        post.article.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogPosts(filteredPosts);
  };

  return (
    <div className="App">
      <Header 
      handleSearch={handleSearch}
      blogPosts={blogPosts} 
      setFilteredBlogPosts={setFilteredBlogPosts} />
      
      <button className="show-form" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Show Form"}
      </button>
      {/* Conditionally hide/unhide form on button click */}
      <NewPostForm 
        blogPosts={blogPosts}
        setBlogPosts={setBlogPosts}
        showForm={showForm}
        onSubmit={handleSubmit}
      /> 
      <BlogPostContainer 
        blogPosts={filteredBlogPosts} 
        // setBlogPosts={setBlogPosts}
      />
    </div>
  );
}

export default App;