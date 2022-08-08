import React ,{useState} from 'react'
// import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './RoleAccordion.css';
import Checkbox from '@mui/material/Checkbox';
// import {Checkbox }from '@material-ui/core/'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export default function RoleAccordion(){
  
  const [name,setName]=useState([])
  function getValue(e)
  
  {
  let data=name;
  data.push(e.target.value)
  console.log(e.target.checked +" "+ e.target.value)  
}
  
  
  
  
  return (
    <div className="whole">
    <Accordion className="a-main" >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className='HR Panel'>HR Panel</Typography>
      </AccordionSummary>
      <AccordionDetails>

        <div className="checkboxes">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F1"
              control={<Checkbox />}
              label="Feature 1"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F2"
              control={<Checkbox />}
              label="Feature 2"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F3"
              control={<Checkbox />}
              label="Feature 3"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F4"
              control={<Checkbox />}
              label="Feature 4"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
              
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F5"
              control={<Checkbox />}
              label="Feature 5 &nbsp;"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          
          <div className="break"></div>

          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F6"
              control={<Checkbox />}
              label="Feature 6"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F7"
              control={<Checkbox />}
              label="Feature 7"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F8"
              control={<Checkbox />}
              label="Feature 8"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F9"
              control={<Checkbox />}
              label="Feature 9"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F10"
              control={<Checkbox />}
              label="Feature 10"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>

          <div className="break"></div>

          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F11"
              control={<Checkbox />}
              label="Feature 11"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F12"
              control={<Checkbox />}
              label="Feature 12"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F13"
              control={<Checkbox />}
              label="Feature 13"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F14"
              control={<Checkbox />}
              label="Feature 14"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="F15"
              control={<Checkbox />}
              label="Feature 15"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>

        </div>


      </AccordionDetails>
    </Accordion>

    <Accordion style={{ marginTop: "30px" }} className="a-main" >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className='Leave-Management'>Leave Management:</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="checkboxes"  >
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="L F1"
              control={<Checkbox />}
              label="Feature 1"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="L F2"
              control={<Checkbox />}
              label="Feature 2"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="L F3"
              control={<Checkbox />}
              label="Feature 3"
              labelPlacement="end"
              className="box"
              onChange={(e)=>{getValue(e)}}
            />
          </FormGroup>
        </div>

      </AccordionDetails>
    </Accordion>
  </div>

    
  );
}
