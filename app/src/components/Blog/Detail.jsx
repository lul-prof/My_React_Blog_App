import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import  './Blog.css'


const Detail = () => {
    const {id}=useParams();
    const [post, setPost]=useState([])
    const [imageArray,setImageArray]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/'+id)
        .then(res=>{
            setPost(res.data)
            setImageArray(res.data.images)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='detail-post'>
        <div className='post-title'>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </div>
        <div className='image-post'>
            {imageArray.map((image, index)=>(
                <img src={image} alt='image' key={index} />
            )
            )}
        </div>
        
    </div>
  )
}

export default Detail