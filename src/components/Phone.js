import React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Phone(){
    const navigate = useNavigate();
   
    const [inputValue, setInputValue] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("phone");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
    const handleInput = (e) => {
      // this is where we'll call our future formatPhoneNumber function that we haven't written yet.
      const formattedPhoneNumber = formatPhoneNumber(e.target.value);
      // we'll set the input value using our setInputValue
      setInputValue(formattedPhoneNumber);
    };

    function formatPhoneNumber(value) {
        // if input value is falsy eg if the user deletes the input, then just return
        if (!value) return value;
      
        // clean the input for any non-digit values.
        const phoneNumber = value.replace(/[^\d]/g, '');
      
        // phoneNumberLength is used to know when to apply our formatting for the phone number
        const phoneNumberLength = phoneNumber.length;
      
        // we need to return the value with no formatting if its less then four digits
        // this is to avoid weird behavior that occurs if you  format the area code to early
      
        if (phoneNumberLength < 4) return phoneNumber;
      
        // if phoneNumberLength is greater than 4 and less the 7 we start to return
        // the formatted number
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
      
        // finally, if the phoneNumberLength is greater then seven, we add the last
        // bit of formatting and return it.
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 10)}`;
      }
      const changeState = () => {
        localStorage.setItem('phone', JSON.stringify(inputValue));
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
            <div >
        <h1 style={{marginTop:"20%"}}>What's your phone number ?</h1>
         <TextField
         style={{width:"100%"}}
          id="standard-helperText"
          label="Phone"
          defaultValue="Default Value"
          variant="outlined"
      
          onChange={(e) => handleInput(e)} 
          value={inputValue} 
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


export default Phone;