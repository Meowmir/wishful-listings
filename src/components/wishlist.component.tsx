import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Container, IconButton} from "@mui/material";
import React, {useCallback, useState} from "react";

export default function WishList({ list, edit, setList } : { list: string[], edit: boolean, setList: React.Dispatch<React.SetStateAction<string[]>>}) {
  const iconStyle = {
    width: 20,
    verticalAlign: "top",
    margin: 2,
    color: "white"
  }

  const deleteItem = useCallback((item: string) => {
    setList((prev) => {
      return prev.filter((itemToRemove: string) => item !== itemToRemove)
    })
  }, [setList])

  return (
    <>
      <Container style={{marginRight: 300}}>
        <h3>Wish List</h3>
        <ol>
          { list.map((item) => {
            if(edit) {
              return <li key={item}>
                <span style={{marginRight: 10}}>{item}</span>
                <IconButton size="small">
                  <EditIcon style={iconStyle}/>
                </IconButton>
                <IconButton size="small" onClick={() => deleteItem(item)}>
                  <DeleteIcon style={iconStyle}/>
                </IconButton>
              </li>
            }
            return <li key={item}>{item}</li>
          })}
        </ol>
      </Container>
  </>
  )
}
