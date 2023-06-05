import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Mainpage from './Components/Mainpage';
import Register from './Components/Register';
import { UserContextProvider } from './UserContext';
import Newpost from './Components/Newpost';
import UsersPosts from './Components/UsersPosts';
import Singleposts from './Components/Singleposts';
import Edit from './Components/Edit';


function App() {

  return (
    <UserContextProvider>
    <div className="App">
      <Navbar />
      <div className="wrap">
     
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/New' element={<Newpost/>}/>
        <Route path='/MyPosts' element={<UsersPosts/>}/>
        <Route path='/post/:id' element={<Singleposts/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        
      </Routes>
      </div>
    </div>
    </UserContextProvider>
  );
}

export default App;
