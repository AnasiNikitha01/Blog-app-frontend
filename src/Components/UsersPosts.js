import React, { useEffect, useState } from 'react'
import Blogs from './Blogs'

export default function UsersPosts() {
  const [posts,Setposts] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:3000/post').then(res=>{
          res.json().then(posts =>{
              Setposts(posts);
          })
      });
  },[]) ;

  return (
    <div className='UsersPosts'>
        <div className="container">
          {
            posts.map((posts,index) =>(
               <Blogs key={index} {...posts}/>
            ))
          }
       </div>
    </div>
  )
}
