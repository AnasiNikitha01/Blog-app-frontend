
import { useContext, useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';



export default function Navbar() {

  // const [Logedin,SetLogedin] = useState(null);
  const { Setuserinfo, userinfo } = useContext(UserContext);
  const [Display1, setDisplay1] = useState('none');

  useEffect(() => {

    fetch("http://localhost:3000/profiles", {
      method: 'GET',
      credentials: 'include'
    }).then((response) => response.json())
      .then((data) => {
        console.log(data); // Check if cookies are received
        Setuserinfo(data);
        //SetLogedin(data.Email);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [Setuserinfo]);


  function Logout() {

    fetch("http://localhost:3000/logout", {
      method: 'POST',
      credentials: 'include',
    }).then(response => {
      if (response.ok) {
        window.location.href = '/';
      }
    })

    console.log('logged out');
    // SetLogedin(null);
    Setuserinfo(null);
    setDisplay1('block')

    setTimeout(() => {
      setDisplay1('none');
    }, 5000);

  }


  var Email = userinfo?.Email;


  return (
    <div>

      <div className="navbar">
        <Link to={'/'} className="logo">BLOG NOTES</Link>


        <div className="links">
          {Email && (
            <>
            <div className="welcome">Welcome Back <i class="bi bi-emoji-laughing-fill"></i></div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-distribute-vertical"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><Link to={'/'} className='dropdown-item userIcon'><i className="bi bi-person-circle"></i>{Email}</Link></li>
            <li> <Link to={'/MyPosts'} className='dropdown-item userIcon'><i className="bi bi-card-heading"></i>Blogs</Link></li>
            <li>  <Link to={'/New'} className='dropdown-item create'><i className="bi bi-plus-circle"></i>Create Blog</Link></li>
            <li>   <button onClick={Logout} className='dropdown-item logout'>Logout</button></li>
          </ul>
          
        </div>
              {/* <Link to={'/'} className='dropdown-item userIcon'><i className="bi bi-person-circle"></i>{Email}</Link>
              <Link to={'/MyPosts'} className='dropdown-item userIcon'>Blogs</Link>
              <Link to={'/New'} className='dropdown-item login'><i className="bi bi-plus-circle"></i></Link>
              <button onClick={Logout} className='dropdown-item logout'>Logout</button> */}
            </>
          )}

          {!Email && (
            <>
              <Link to={'/login'} className='login'>Login</Link>
              <Link to={'/register'} className='register'>Register</Link>
            </>
          )}
        </div>
      </div>

      <div className="alert alert-success text-success" role="alert" style={{ display: Display1 }}><div className="inner"><i className="bi bi-check-circle-fill"></i><span>Logout Succesfully </span></div></div>

    </div>
  )
}
