import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./wnote.scss";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Wnotes = () => {
  const [error, setError] = useState(false);
  const [inputdata, setInputdata] = useState({
    title: "",
    details: "",
  });

  let navigate = useNavigate();

  let { title, details } = inputdata;

  const InputHandle = (e) => {
    let { name, value } = e.target;

    setInputdata({ ...inputdata, [name]: value });
  };

  const inputsubmit = async (e) => {
    e.preventDefault();

    if (!title || !details) {
      setError(true);
      toast.error("Fill all Fields");
    } else {
      await axios
        .post("https://desolate-bastion-21907.herokuapp.com/notes", inputdata)
        .then((resp) => {
          toast.success("Note Added ");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="note">
        <h2>Write Your Notes ...</h2>
        <form noValidate autoComplete="off" onSubmit={inputsubmit}>
          <div className="box">
            <TextField
              id="outlined-textarea"
              label="Title"
              name="title"
              value={title}
              fullWidth
              required
              color="secondary"
              onChange={InputHandle}
              error={error}
            />
            <TextField
              id="outlined-multiline-static"
              label="Details"
              multiline
              rows={4}
              fullWidth
              required
              color="secondary"
              name="details"
              value={details}
              error={error}
              onChange={InputHandle}
            />
          </div>
          <Button type="submit" variant="contained" color="secondary">
            {" "}
            SUBMIT <KeyboardArrowUpOutlinedIcon />{" "}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Wnotes;
