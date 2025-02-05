import React from 'react'
import {  HashRouter,BrowserRouter, Routes,Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import PostReady from '../pages/PostReady'
import Posting from './Posting';


const AppRouter = () => {
    return (
      <div>
        <BrowserRouter>
         <Routes>
          
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/postready' element={<PostReady/>}/>
          <Route path="/posting" component={Posting} />


  
  
         </Routes>
         </BrowserRouter>
      
        
      </div>
    )
  }
  
  export default AppRouter