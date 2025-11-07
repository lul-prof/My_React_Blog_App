import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Posts from './components/Blog/Posts'
import Detail from './components/Blog/Detail'
import CreateBlog from './components/Blog/createBlog'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Posts/>}></Route>
        <Route path='/read/:id' element={<Detail />}></Route>
        <Route path='/newblog' element={<CreateBlog />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
