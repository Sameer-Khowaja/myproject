import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Logo from './logo512.png';



function TopBar() {
  

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" style={{borderRadius: "50px",
      height: "64px",
      borderTop: "1px solid #ddd",
      borderBottom: "1px solid #ddd",
      backgroundColor: "white",}}>
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            <img
              src= {Logo}
              alt="Logo"
              style={{ height: "40px" }}
            />
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{borderRadius: "50px"}}
          >
            Feedback
          </Button>
          <IconButton color="primary"><NotificationsNoneIcon /></IconButton>
          <IconButton color="primary"><InfoOutlinedIcon /></IconButton>
          <Avatar
            alt="User Profile"
            src="/path/to/profile.jpg"
            style={{marginLeft: "5px"}}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
