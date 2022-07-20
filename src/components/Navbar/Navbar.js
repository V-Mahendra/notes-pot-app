import React from "react";
import "./navbar.scss";
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
// import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
const Navbar = () => {



  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("Default", { month: 'long' });
  let day = d.toLocaleString("Default", { weekday: 'long' });

  let ndate =[` ${day} - ${date} / ${month} / ${year}`]

  let time = d.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
  });


  return (
    <div className="navbar">
      <div className="left">
      <div className="logoname">
        <h3>Notes-Pot</h3>
      </div>
      </div>
      <div className="center"> 
      <div className="time">{time}</div>
      <div className="date">{ndate}</div>
      </div>

      <div className="right">
      <div className="toggle" >< PermIdentityOutlinedIcon /></div>

      </div>
    </div>
  );
};

export default Navbar;
