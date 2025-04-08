import React, {useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom';

function PostDetail(){
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
        setLoading(false);
      });
  }, [id]);
    if (loading) return <p className="loading">Loading post...</p>;
    if(!post) return <p className="loading">Post not found.</p>;
    return(
        <div className="post-detail">
            <Link to="/" className="back-link">← Back to Home</Link>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetail;