import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Container, IconButton} from "@mui/material";

export default function WishList({ list, edit } : { list: string[], edit: boolean}) {
  const iconStyle = {
    width: 20,
    verticalAlign: "top",
    margin: 2,
    color: "white"
  }

  const deleteItem = (item: string) => {
    const itemToRemove = list.indexOf(item)
    list.splice(itemToRemove)
  }

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
                <IconButton size="small" onClick={() => deleteItem}>
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
