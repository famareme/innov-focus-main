import React, { useState,useEffect } from 'react';
import { blogsRef } from '../firebase'

const BlogList = () => {
  const [blogs, setBlogs] = useState([])

  
  useEffect(() => {
    blogsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = {...items};
      setBlogs(newState)
    });
  },[])

  const blogsKeys = Object.values(blogs)

  return ( 
    <div className="container">
       { blogsKeys.map(blog => (
          <div className="blog-preview" key={blog.id}>
          
            <h2>{blog.title}</h2>
            <h3>{blog.message}</h3>
           
            <p>Writen by {blog.date}</p>
          </div>
        ))}
    </div>
   );
}
 
export default BlogList;