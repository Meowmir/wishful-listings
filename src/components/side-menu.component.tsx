import {Box, Button, Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SettingsIcon from '@mui/icons-material/Settings';
import AddItem from "./add-item.component.tsx";
import React, {useCallback} from "react";

export default function SideMenu({setList} : { setList: React.Dispatch<React.SetStateAction<string[]>>}){

  const addNewItem = useCallback((name: string, file: File | null) => {
    setList((prev) => {
      return [...prev, name]
    })
  }, [setList])

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
              <Button
                variant="contained"
                key="add"
                startIcon={<AddIcon/>}
              >
                Add
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" key="edit" startIcon={<EditIcon/>}>Edit</Button>
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
