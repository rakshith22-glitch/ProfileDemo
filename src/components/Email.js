import React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from "react";
import validator from 'validator';
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Email(){
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const [email , setemail] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("email");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
    const validateEmail = (e) => {
        setemail(e.target.value)
        
      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
      } else {
        setEmailError('Enter valid Email!')
      }
    }
    const changeState = () => {
        localStorage.setItem('email', JSON.stringify(email));
        navigate("/")
    }; 
    return(
      <Container style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      }}>
  
    <Stack
        component="form"
        spacing={10}
        noValidate
        autoComplete="off"
      >
         <div style={{marginTop:"10%"}}>
                <ArrowBackIcon onClick={() => navigate("/")}/>
            </div>
            <div>
            <h1 style={{marginBottom:"100px"}}>What's your Email ?</h1>
         <TextField
         style={{width:"100%"}}
          id="standard-helperText"
          label="Email"
          value={email}
          variant="outlined"
          onChange={(e) => validateEmail(e)}
        />
        <div>
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
        </div>
        
        </div>
        <Button variant="contained" class="pushable" onClick={changeState}> 
        <span class="front">
           Update
        </span>
        </Button>
        </Stack>
        </Container>
    )
}


export default Email;