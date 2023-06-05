import React from 'react'
import Carousel from './Carousel'
import Advertise from './Advertise'
import Blogs from './Blogs'
import { useState,useEffect } from 'react'

export default function Mainpage() {
  const [posts,Setposts] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:3000/post').then(res=>{
          res.json().then(posts =>{
              Setposts(posts);
          })
      });
  },[]) ;

  return (
    <div className='Mainpage'>
      <Carousel />

      <div className="container text-center">
        <div className="row">
          <div className="col-10" id='blog-part'>
          {
            posts.map((posts,index) =>(
               <Blogs key={index} {...posts}/>
            ))
          }
          </div>
          <div className="col-2" id='ads-part'>
            <p>Advertisements</p>
              <Advertise />
              <Advertise />
          </div>
        </div>
      </div>
    </div>
  )
}
