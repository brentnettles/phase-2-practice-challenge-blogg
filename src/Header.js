import React, { useState } from "react";

function Header({ blogPosts, setFilteredBlogPosts }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredPosts = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.author.toLowerCase().includes(query.toLowerCase()) ||
        post.article.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogPosts(filteredPosts);
  };

  return (
    <div>
      <header className="logo">
        <h1>the bLOGg</h1>
        {/* This is the search box */}
        <input
          style={{
            width: "500px",
            height: "20px",
            borderRadius: "15px",
            border: "none",
            backgroundColor: "rgb(88, 204, 208)",
            padding: "10px",
            color: "white",
          }}
          placeholder="Search an article or the author"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
        ></input>
      </header>
    </div>
  );
}

export default Header;