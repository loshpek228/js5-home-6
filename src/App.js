import React, { useState, useEffect } from 'react';


function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setFilter(data);
      });
  }, []);

  const handleSearch = () => {
    const Search = search.toLowerCase();
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(Search) ||
      post.body.toLowerCase().includes(Search)
    );
    setFilter(filtered);
  };

  return (
    <div className="App">

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      
      />
      <button onClick={handleSearch}>найти</button>
      <div className="posts">
        {filter.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
