import React from "react";
// import { Button } from "@mui/material";
import banner from './banner.png';




function HeroSection() {


  return (
    <div style={{position: "relative",
    height: "279px",
    boxShadow: "rgba(0, 0, 0, 0.13)", 
    borderRadius: "25px",
    backgroundImage: `url(${banner})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 20px", 
    marginTop:"25px",
    color: "white",}}>
      <div style={{maxWidth: "50%"}}>
        <h1>
Hi! 👋 James Doe</h1>
        <p>
        Lorem ipsus dolor sit amen, something important to say here
        </p>
        {/* <Button variant="contained" color="primary" style={{marginTop: "20px",
    borderRadius: "50px",
    height: "54px"
    ,
    width: "166px"}}>
          Add Check In
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;