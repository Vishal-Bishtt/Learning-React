import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
function Home(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>{
            setPosts(data.slice(0,10));
            setLoading(false);
        })
        .catch((err)=>{
            console.error("Error fetching posts:",err);
            setLoading(false);
        })
    },[]);
    return(
        <div>
            <h2>Blog Posts</h2>
            {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <li key={post.id} style={{ margin: "10px 0" }}>
              <Link to={`/post/${post.id}`} style={{ textDecoration: "none", color: "#333" }}>
                <strong>{post.title}</strong>
              </Link>
            </li>
          ))}
        </ul>
      )}
        </div>
    );
}
export default Home;