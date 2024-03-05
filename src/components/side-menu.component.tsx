import {Box, Button, Grid} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SettingsIcon from '@mui/icons-material/Settings';
import AddItem from "./add-item.component.tsx";
import React, {useCallback} from "react";
import SaveIcon from '@mui/icons-material/Save';

export default function SideMenu({setList, setEdit, edit} : { setList: React.Dispatch<React.SetStateAction<string[]>>, setEdit: React.Dispatch<React.SetStateAction<boolean>>, edit: boolean}){

  const addNewItem = useCallback((name: string, file: File | null) => {
    setList((prev) => {
      return [...prev, name]
    })
  }, [setList])

  const editSaveButton = (edit: boolean, setEdit: React.Dispatch<React.SetStateAction<boolean>>) => {
    if(edit) {
      return <Button
        variant="contained"
        key="edit"
        startIcon={<SaveIcon/>}
        onClick={() => setEdit(false)}
      >
        Save
      </Button>
    } return <Button
      variant="contained"
      key="edit"
      startIcon={<EditIcon/>}
      onClick={() => setEdit(true)}
    >
      Edit
    </Button>
  }


  return (
    <>
      <Box style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: 300,
        backgroundColor: "white",
      }}>
          <Grid
            container
            spacing={2}
            style={{
              marginTop: 50,
              marginLeft: 50
          }}>
            <Grid item xs={12}>
              <p style={{color: "black"}}><AddItem onAdd={addNewItem}/></p>
            </Grid>
            <Grid item xs={12}>
              {editSaveButton(edit, setEdit)}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" key="others" startIcon={<CardGiftcardIcon/>}>Hugo's List</Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" key="settings" startIcon={<SettingsIcon/>}>Settings</Button>
            </Grid>
          </Grid>
      </Box>
    </>
  )
}
