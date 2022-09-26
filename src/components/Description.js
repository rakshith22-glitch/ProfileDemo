import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Name(){
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const onDescriptionChange = event => {
        setValue(event.target.value);
        
       
    }; 

    const changeState = () => {
     
        localStorage.setItem('description', JSON.stringify(value));
        navigate("/")
    }; 
     
     const [inputValue, setInputValue] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("description");
        const initialValue =  JSON.parse(saved);
        setValue(initialValue)
        return initialValue || "";
      });
     
    return(
        <Container style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
      
        <Stack
            component="form"
            spacing={7}
            noValidate
            autoComplete="off"
          >
             <div style={{marginTop:"10%"}}>
                <ArrowBackIcon onClick={() => navigate("/")}/>
            </div>
                <div>
            <h1 style={{marginBottom:"100px"}}> Tell us about yourself </h1>
            {/* <textarea style={{width:"400px" , height:"200px"}}
            onChange={onDescriptionChange}>
            {value}
            </textarea> */}
            <TextField
            id="standard-helperText"
            label="What do you like doing the most ??"
            multiline
            onChange={onDescriptionChange}
            value= {value}
            style={{ boxSizing: "border-box",
                width: "100%"}}
            />
           </div>
        <Button variant="contained" class="pushable"  onClick={changeState}> 
        <span class="front">
           Update
        </span>
        </Button>
       </Stack>
        </Container>
    )
}


export default Name;