import {Modal, Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import AddIcon from "@mui/icons-material/Add";

export default function AddItem({ onAdd } : { onAdd: (name: string, file: File | null) => void }) {
  const [open, setOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [itemName, setItemName] = useState("")

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)


  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    if(!itemName) {
      alert("Item cannot be empty")
    } else {
      console.log("Submitting:", selectedFile);
      console.log("Submitting:", itemName);
      onAdd(itemName, selectedFile)
      handleClose();
    }
  };

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
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
        startIcon={<AddIcon/>}
        onClick={handleOpen}
      >
        Add to your list
      </Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ ...modalStyle }}>
          <h3 style={{color: "black"}}>What do you wish for?</h3>
            <TextField
              id="outlined-basic"
              label="Item"
              variant="outlined"
              required
              onChange={
              (event) => {
                setItemName(event.target.value)
              }
            }/>
            <input
              type="file"
              id="logo"
              onChange={handleFileChange}
              accept="image/*"
            />
            <Button onClick={handleSubmit}>
              <AddIcon/> Add
          </Button>
          </Box>
      </Modal>
    </>
  )
}
