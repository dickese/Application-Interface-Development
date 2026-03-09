import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);        
        setFilteredPosts(data); 
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const result = posts.filter((post) =>
      post.title.includes(value)
    );

    setFilteredPosts(result);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="input title"
        value={search}
        onChange={handleSearch}
      />

      <ul>
        {filteredPosts.map((post) => (
          <p>{post.title}</p>
        ))}
      </ul>
    </div>
  );
}

export default App