import React, { useEffect, useState,useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import format from 'date-fns/format';
import { UserContext } from '../UserContext';
import { Navigate } from 'react-router-dom';

export default function Singleposts() {

    const [NavigateTo, setNavigateTo] = useState(false);
    const {userinfo} = useContext(UserContext);
    const [postInfo,SetpostInfo] = useState('');

    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:3000/post/${id}`).then(res=>{
            res.json().then(postInfo=>{
                  SetpostInfo(postInfo);
            })
        })
    },[id]);

    function delete_post() {
        fetch(`http://localhost:3000/delete/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        })
          .then((response) => {
            if (response.ok) {
               setNavigateTo(true)
              console.log('Post deleted successfully');
            } else {
              console.log('Failed to delete post');
            }
          })
        
      }
      
      if(NavigateTo === true){
        return <Navigate to={'/MyPosts'}/>
      }



    if(!postInfo) return''; 
  return (
    <div className='singlePost'>
        <div className="container">
            <h2 className='titlePost'>{postInfo.title}</h2>

            <p className="smallPost">
            <span>
            Created on {format(new Date(postInfo.createdAt),'MMM d,yyyy HH:mm')}
            </span>
            <span>
                Blog by @{postInfo.username}
            </span>
            </p>

            
           {userinfo.id === postInfo.author && (
           <p className='post_buttons'> 
           
           <Link to={`/edit/${postInfo._id}`} className='edit-btn'><i className="bi bi-pencil-square"></i> Edit Blog</Link> 
           
           <button className='delete-btn' onClick={delete_post}><i className="bi bi-trash-fill"></i> Delete Blog</button>
           
           </p>
           )}

        <div className="imagePost">
            <img src={`http://localhost:3000/${postInfo.files}`} className="img-fluid" id='imagePost' alt="..."/>
            </div>
         <div className="info">

            <div dangerouslySetInnerHTML={{__html: postInfo.summary}} className="summaryPost" />
            <span className='update'>
            Last updated on {format(new Date(postInfo.updatedAt),'MMM d,yyyy HH:mm')}
            </span>
            </div>
        </div>
    </div>
  )
}
