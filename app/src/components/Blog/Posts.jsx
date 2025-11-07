import React, { useEffect, useState } from 'react'
import axios from 'axios'  
import  './Blog.css'
import Post from './Post'

const Posts = () => {
    const [blogs, setBlogs]=useState([])
    const [data,setData]=useState([])
    
    useEffect(()=>
    {
        axios.get('https://dummyjson.com/products')
        .then(res=>{
            setBlogs(res.data.products)
            setData(res.data.products)
        })
        .catch(err=>console.log(err))
    },[])

    const getInputData=()=>{
        setBlogs(data.filter(r=>r.title.toLowerCase().includes(event.target.value.toLowerCase())))
    }

  return (
    <div className='posts'>
        <div className='search-container'>
            <input 
                type='search'
                placeholder='Search'
                className='search'
                onChange={getInputData}
            />
        </div>
        <div className='icon'>
            <h3 style={{color:"white",fontWeight:"bold"}}>Blogs</h3>
            <i className='fa fa-calculator'/>
        </div>
        <div className='posts-container'>
            {blogs.map((blog,index)=>(
                <Post blog={blog} key={index} />
            )
            )}

        </div>
    </div>
  )
}

export default Posts