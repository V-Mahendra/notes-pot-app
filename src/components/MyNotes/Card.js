import React, { useEffect, useState } from "react";
import "./card.scss";
import axios from "axios";
// import { FaEdit, FaRemoveFormat } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Masonry from "react-masonry-css";
import {toast , ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = () => {
  const [notesdata, setNotesdata] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
   main()
  }, []);

  const main = async () =>{
    const result = await  axios.get("https://desolate-bastion-21907.herokuapp.com/notes").then((resp) => {
      setNotesdata(resp.data);
      // return result
    });
  }

  const deleteHandle = (id) => {
    if( window.confirm("Are you sure want to delete  ?")){
      axios.delete(`https://desolate-bastion-21907.herokuapp.com/notes/${id}`).then((resp) => {
        toast.success("Data Deleted Successfully")
        const newdata = notesdata.filter((ndata) => {
          return ndata.id !== id;
        });
        setNotesdata(newdata);
        setTimeout(() => {
          main()
        }, 100);
      });
    }
    
  };


  function truncate (str , n){
    return  str?.length > n ? str.substr(0, n -1 ) + "..." : str;

    //truncate operation for short the word or summary length

 }

  const breakpoints = {
    default: 4,
    1400:3,
    1200: 2,
    760: 1,
  };

  return (<>
  <ToastContainer />
    <div className="card">
      <div className="cardcontainer">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {notesdata &&
            notesdata.map((item , index) => {
              return (
                <div className="cardbox" key={index}>
                  <div className="top">
                    <h3>{truncate (item.title, 38)}</h3>
                    <div className="btngroup">

                        <DriveFileRenameOutlineOutlinedIcon  className="editbtn" onClick={() => navigate(`edit/${item._id}`)}  />
                        <DeleteOutlineIcon  className="dltbtn" onClick={() => deleteHandle(item._id)} />                       
                   
                    </div>
                  </div>


                  <p>{item.details}</p>
                </div>
              );
            })}
        </Masonry>
      </div>
    </div>
  </>
  );
};

export default Card;

