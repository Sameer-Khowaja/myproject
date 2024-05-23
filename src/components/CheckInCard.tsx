import React from "react";
import { Card, Typography } from "@mui/material";

interface CheckIn {
  title: string;
  img: string;
}

interface CheckInCardProps {
  checkIns: CheckIn[];
}

const CheckInCard: React.FC<CheckInCardProps> = ({ checkIns }) => {
  return (
    <div>
      <Typography variant="h4" style={{ marginTop: "35px" }}>Added Check-Ins</Typography>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}>
        {checkIns.map((checkIn, index) => (
          <Card key={index} style={{
            margin: "0 10px",
            textAlign: "center",
          }}>
            <img
              src={checkIn.img}
              alt={`Check-In ${index + 1}`}
              style={{
                maxWidth: "313px",
                height: "324px",
                objectFit: "cover",
              }}
            />
            {/* Add more content here if needed */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CheckInCard;
