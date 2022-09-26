import * as React from 'react';
import { useState } from "react";
import "./Main.css"
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
// import { useState } from "react";
// import Button from '@mui/material/Button';
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./MyPhoto.webp";
import { useNavigate } from "react-router-dom";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import InputAdornment from '@mui/material/InputAdornment';
function Main() {
  const navigate = useNavigate();
  


 let iconStyles = { color: "#3383FF",    width: 20,
    height: 20 , marginLeft:"-25px", marginBottom:"70px", cursor:"pointer", background:"white", borderRadius: "15px"};

 const [email , setemail] = useState(() => {
  // getting stored value
  const saved = localStorage.getItem("email");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
});

const [inputValue, setInputValue] = useState(() => {
  // getting stored value
  const saved = localStorage.getItem("phone");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
});

const [fullName, setfullName] = useState(() => {
  // getting stored value
  const saved = localStorage.getItem("fullname");
  const fullName = JSON.parse(saved);
  return fullName || "";
});

const [description, setdescription] = useState(() => {
  // getting stored value
  const saved = localStorage.getItem("description");
  const newdescription = JSON.parse(saved);
  return newdescription || "";
});
const [image, setimage] = useState(() => {
  // getting stored value
  const saved = localStorage.getItem("profile");
  return saved || MyPhoto;
});


return(
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>

  <Stack
      component="form"
      spacing={7}
      noValidate
      autoComplete="off"
    >

      <div  style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     marginTop:"10%"
    }}>
      
      <ReactRoundedImage
          image={image}
          roundedColor="#3383FF"
          imageWidth="130"
          imageHeight="130"
          roundedSize="11"
          borderRadius="80"
        />
        <span>
        <EditRoundedIcon  style={iconStyles} onClick={() => navigate("/upload")} />
      </span>
        </div>
        <div class="wrapper" style={{cursor:"pointer"}}>
         <TextField
          className="input"
          id="standard-helperText"
          label="Name"
          defaultValue= {fullName}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <KeyboardArrowRightIcon />
              </InputAdornment>
            ),
          }}
          onClick={() => navigate("/name")}
        />
         
          </div>
          <div class="wrapper">
         <TextField
          className="input"
          id="standard-helperText"
          label="Phone"
          defaultValue= {inputValue}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <KeyboardArrowRightIcon />
              </InputAdornment>
            ),
          }}
          onClick={() => navigate("/phone")}
        />
         
          </div>

          <div class="wrapper">
         <TextField
          className="input"
          id="standard-helperText"
          label="Email"
          defaultValue= {email}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <KeyboardArrowRightIcon />
              </InputAdornment>
            ),
          }}
          onClick={() => navigate("/email")}
        />
          
          </div>

          <div class="wrapper">
          <TextField
              id="standard-helperText"
              label="Tell us about yourself"
              multiline
              value={description}
              onClick={() => navigate("/description")}
              style={{ boxSizing: "border-box",
                  width: "100%"}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <KeyboardArrowRightIcon />
                      </InputAdornment>
                    ),
                  }}
              />
          
            </div>
         
    </Stack>
  </Container>

)


}

export default Main

