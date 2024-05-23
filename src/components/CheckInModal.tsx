import React, { useState } from "react";
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  Typography,
  TextField,
} from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";

interface CheckInModalProps {
  addCheckIn: (title: string, image: string) => void;
}

const CheckInModal: React.FC<CheckInModalProps> = ({ addCheckIn }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCheckIn = () => {
    if (title && image) {
      addCheckIn(title, image);
      setOpen(false);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px", borderRadius: "50px" }}
        onClick={handleOpen}
      >
        Add Check-In
      </Button>
      <Modal
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
            <Typography variant="h6" style={{ marginBottom: "20px", borderBottom: "1px solid #ddd" }}>
              Add Check-In
            </Typography>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "20px" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div style={{ marginBottom: "20px" }}>
              <input
                accept="image/*"
                id="upload-image"
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <label htmlFor="upload-image">
                <Button variant="outlined" component="span">
                  <AddPhotoAlternate style={{ marginRight: "5px" }} />
                  Upload Image
                </Button>
              </label>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                onClick={handleClose}
                style={{ marginRight: "10px", borderRadius: "50px" }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddCheckIn}
                style={{ borderRadius: "50px" }}
              >
                Add
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CheckInModal;
