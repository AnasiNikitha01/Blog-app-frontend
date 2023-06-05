import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';




export default function Newpost() {

    const [title,Settitle] = useState('')
    const [summary,Setsummary] = useState('')
    const [files,Setfiles] = useState('')
    const [username,Setusername] = useState('')
    const [NavigateTo, setNavigateTo] = useState(false);
    const [Display3, setDisplay3] = useState('none');

    

   async function submit(event){
        event.preventDefault();

        const data = new FormData();
        data.set('title',title);
        data.set('username',username);
        data.set('summary',summary);
        data.set('files',files[0]);



    const result= await fetch('http://localhost:3000/post',{
          method:'POST',
          body:data,
          credentials:'include'
        })
        console.log(await result.json());
        setDisplay3('block')
        if(result.ok){
          setTimeout(() => {
            setNavigateTo(true)
         }, 1500);
        }
      }

      if(NavigateTo === true){
        return <Navigate to={'/MyPosts'}/>
      }

  return (
    <div>
      <div className="container">
      <div className="alert alert-success text-success" role="alert" style={{display:Display3}}><div className="inner"><i className="bi bi-check-circle-fill"></i><span>Post completed </span></div></div>
        <form onSubmit={submit} className='form1'>
            <input type="text" name="text" className="text" id='string' required placeholder='Title' value={title} onChange={event => Settitle(event.target.value)}/>

            <input type="text" name="text" className="text" id='string' required placeholder='Full name' value={username} onChange={event => Setusername(event.target.value)}/>
           
            
            <input type="file" name="file" className='files' id='string' required placeholder='Upload your Image' onChange={event => Setfiles(event.target.files)} />
            <small className='small'>*upload only png,jpg and jpge files</small>
           
            <ReactQuill theme='snow' value={summary} required id='string' onChange={newValue => Setsummary(newValue)} className='reactquill' placeholder='Summary' />

        <button className='button'>Post</button>
        </form>
      </div>
    </div>
  )
}
