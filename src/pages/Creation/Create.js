import React from 'react';
import Wnotes from '../../components/CreateNotes/Wnotes';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';


const Create = () => {
  return (
    <div className='home'>
         <Sidebar />
        <div className="homecontainer">
            <Navbar />
            
            <Wnotes />
            
            </div>
    </div>
  )
}

export default Create