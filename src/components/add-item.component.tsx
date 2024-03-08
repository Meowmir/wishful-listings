import { Modal, Box, Button, TextField, Grid } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function AddItem({
  onAdd,
}: {
  onAdd: ({ name, file }: { name: string; file: File | null }) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [itemName, setItemName] = useState("");

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    if (!itemName) {
      alert("Item cannot be empty");
    } else {
      console.log("Submitting:", selectedFile);
      console.log("Submitting:", itemName);
      onAdd({ name: itemName, file: selectedFile });
      handleClose();
    }
  };

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: 4,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <>
      <Button
        variant="contained"
        key="add"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Add to your list
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...modalStyle }}>
          <h3 style={{ color: "black" }}>What do you wish for?</h3>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Item"
                variant="standard"
                required
                onChange={(event) => {
                  setItemName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <label
                style={{
                  backgroundColor: "#ffbf69",
                  cursor: "pointer",
                  padding: 5,
                  borderRadius: 3,
                }}
              >
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                Choose image
              </label>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handleSubmit}
                variant="contained"
                style={{ backgroundColor: "#ff9f1c" }}
              >
                <AddIcon /> Add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
