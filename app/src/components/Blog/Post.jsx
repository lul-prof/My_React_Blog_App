import React from 'react'
import  './Blog.css'
import { Link } from 'react-router-dom'


const Post = ({blog,key}) => {
  return (
    <Link to={`/read/${blog.id}`} className='link'>
    <div className='blog'>
      <div className='blog-img'>
        <img src={blog.thumbnail} />
      </div>
        <div className='blog-title'>
            <h2>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
            </h2>
        </div>

    </div>
    </Link>
  )
}

export default Post