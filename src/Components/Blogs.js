import React from 'react'
import '../App.css'
import {format} from "date-fns";
import { Link } from 'react-router-dom';

export default function Blogs({_id,title,summary,username,files,createdAt}) {
    if(summary.length > 0){
            const maxLength = 50;
             summary= summary.substring(0, maxLength);
    }
    return (
        <div className='Blogs'>
            <Link to={`/post/${_id}`} className='blog-links'>
            <div className="card mb-3">
                <img src={'http://localhost:3000/'+files} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} <Link to={`/post/${_id}`} className='sum'><b>...Check Out</b></Link></h5>
                

                <p className="author">Blog creater: {username} </p>
                </div>
            </div>
                   <p className="text-body-secondary">Posted on {format(new Date(createdAt),'MMM d,yyyy HH:mm')}</p>
            </Link>
        </div>
    )
}
