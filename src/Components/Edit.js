import React, { useEffect } from 'react'
import  { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate, useParams } from 'react-router-dom';

export default function Edit() {
  const [title,Settitle] = useState('')
  const [summary,Setsummary] = useState('')
  const [files,Setfiles] = useState('')
  const [NavigateTo, setNavigateTo] = useState(false);
  const {id} =useParams();
   


    useEffect(()=>{
        fetch('http://localhost:3000/post/'+id)
        .then(res=>res.json().then(post=>{
            Settitle(post.title);
            Setsummary(post.summary);
        }))
    },[id])
    

   async function update(event){
        event.preventDefault();

        const data = new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('id',id);
        if(files?.[0]){
        data.set('files',files?.[0]);
         }

    const result =await fetch('http://localhost:3000/post',{
            method:'PUT',
            body:data,
            credentials:'include'
        })
       
        if(result.ok){
            setNavigateTo(true);
        }

   }
   

      if(NavigateTo === true){
        return <Navigate to={`/post/${id}`}/>
      }

  return (
    <div>
          <div>
      <div className="container">

        <form onSubmit={update} className='form1'>
            <input type="text" name="text" className="text" id='string' required placeholder='Title' value={title} onChange={event => Settitle(event.target.value)}/>

          
            
            <input type="file" name="file" className='files' id='string' placeholder='Upload your Image' onChange={event => Setfiles(event.target.files)} />
            <small className='small'>*upload only png,jpg and jpge files</small>
           
            <ReactQuill theme='snow' value={summary} required id='string' onChange={newValue => Setsummary(newValue)} className='reactquill' placeholder='Summary' />

        <button className='button'>Update</button>
        </form>
      </div>
    </div>
      
    </div>
  )
}
