import React from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom'
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import applogo from "./noteslogo.jpg"
const Sidebar = () => {
  return (
     <div className="sidebar">
      
     <Link to="/" className='logo'>  <img className='imglogo' src={applogo} alt="" /> <span> Notes-Pot</span>   </Link>
      
  
      <div className="sidecontainer">

        <Link className='sidemenu' to="/">
        <NotesOutlinedIcon/> <p> Notes</p>
        </Link>
        <Link className='sidemenu' to="/create">
        <AddCircleOutlineOutlinedIcon /> <p>  Create</p>
        </Link>
      </div>
     
      

     </div>
  )
}

export default Sidebar