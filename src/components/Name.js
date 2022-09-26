import React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from "react";
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import './Main.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Name(){
    const navigate = useNavigate();
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    
    const onFirstNameChange = event => {
        setfirstName(event.target.value);
     };

     const onLastNameChange = event => {
        setlastName(event.target.value);
     };

     const changeState = () => {
        const fullName = firstName + " " + lastName;
        localStorage.setItem('fullname', JSON.stringify(fullName));
        navigate("/")
    }; 

   useState(() => {
        // getting stored value
        const saved = localStorage.getItem("fullname");
        const initialValue =  JSON.parse(saved);
        if(initialValue){
        const finalV = initialValue.split(" ");
        setfirstName(finalV[0]);
        setlastName(finalV[1]);
        return finalV }
        else{
            return "" ;
        } 
      });
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
    >       <div style={{marginTop:"10%"}}>
                <ArrowBackIcon onClick={() => navigate("/")}/>
            </div>
            <h1 style={{marginTop:"30%"}}>What's your name ?</h1>
           <div> 
         <TextField
          id="standard-helperText"
          label="First Name"
          variant="outlined"
         style={{ float:"left" , width:"48%"}}
          onChange={onFirstNameChange}
          value={firstName} 
        />
         <TextField
          id="standard-helperText"
          label="Last Name"
          variant="outlined"
          style={{ width:"48%", float:"right"}}
          onChange={onLastNameChange}
          value={lastName} 
        />
         </div>
       
        <Button style={{marginTop:"60%"}} variant="contained" class="pushable"  onClick={changeState}> 
        <span class="front">
           Update
        </span>
        </Button>
       
        </Stack>
        </Container>
    )
}


export default Name;