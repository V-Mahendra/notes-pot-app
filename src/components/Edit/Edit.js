import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Edit.scss";

const Edit = () => {
  let params = useParams();
  let navigate = useNavigate();
  // console.log(params.id)

  const [editNotes, setEditNotes] = useState({
    title: "",
    details: "",
  });

  let { title, details } = editNotes;

  useEffect(() => {
    axios
      .get(`https://desolate-bastion-21907.herokuapp.com/notes/${params.id}`)
      .then((resp) => {
        setEditNotes(resp.data);
      });
  }, [params]);

  const inputhandle = (e) => {
    let { name, value } = e.target;

    setEditNotes({ ...editNotes, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!title || !details) {
      toast.error("fill all input fields");
    } else {
      axios
        .put(
          `https://desolate-bastion-21907.herokuapp.com/notes/${params.id}`,
          editNotes
        )
        .then((resp) => {
          setTimeout(() => {
            navigate("/");
          }, 1500);
        });
      toast.success("Note Updated Successfully");
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="con">
        <Button
          className="btncancel"
          type="submit"
          variant="contained"
          color="secondary"
          onClick={() => navigate("/")}
        >
          {" "}
          Cancel <CancelOutlinedIcon />{" "}
        </Button>
        <form
          noValidate
          autoComplete="off"
          className="edit"
          onSubmit={handlesubmit}
        >
          <div className="editcard">
            <div className="top">
              <TextField
                id="outlined-textarea"
                label="Title"
                name="title"
                value={title}
                color="secondary"
                fullWidth
                required
                onChange={inputhandle}
              />
            </div>
            <div className="details">
              <TextField
                id="outlined-multiline-static"
                label="Details"
                multiline
                rows={13}
                fullWidth
                required
                color="secondary"
                name="details"
                value={details}
                onChange={inputhandle}
              />
            </div>
          </div>

          <Button
            className="btn"
            type="submit"
            variant="contained"
            color="success"
          >
            {" "}
            Update <UpgradeOutlinedIcon />{" "}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Edit;
