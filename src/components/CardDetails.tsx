import React from "react";
import {
  Modal,
  Fade,
  Typography,
} from "@mui/material";



function generateRandomId(length: number): string {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const CardDetails: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const randomId = generateRandomId(8);

  return (
    <Modal
      style={{display: "flex",
      alignItems: "center",
      justifyContent: "center",}}
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      
    >
      <Fade in={isOpen}>
        <div style={{backgroundColor: "white",
    boxShadow: "5",
    padding: "5px",
    maxWidth: "80vw",
    maxHeight: "80vh",
    display: "flex",}}>
          <div style={{flex: 1,
    paddingRight: "5px",
    borderRight: "1px solid #ccc",
    marginRight: "5px"}}>
            <Typography variant="h6" gutterBottom>
              Booking ID: {randomId}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Number of Rooms: 4
            </Typography>
            <Typography variant="body1" gutterBottom>
              Number of Guests: 4
            </Typography>
            <Typography variant="body1" gutterBottom>
              Booked Date: 23/5/2024
            </Typography>
          </div>
          <div style={{flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",}}>
            <img src="placeholder.jpg" alt="Card" style={{maxWidth: "100%",
    maxHeight: "100%",}} />
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default CardDetails;
