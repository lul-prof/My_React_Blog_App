import React from 'react'
import  './Blog.css'


const CreateBlog = () => {
  return (
    <div className='form-container'>
        <form>
            <input type='text' name='title' placeholder='Write Title' /><br/>
            <input type='text' name='descr' placeholder='Write Decsription' /><br/>
            <input type='file' name='thumb' /><br/>
            <button className='new-blog'>Submit</button>
        </form>

    </div>
  )
}

export default CreateBlog