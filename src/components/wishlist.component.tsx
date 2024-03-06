import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Container, IconButton } from "@mui/material";
import React, { useCallback, useState } from "react";
import EditItemConfirmation from "./edit-item-confirmation.component.tsx";

export default function WishList({
  list,
  edit,
  setList,
}: {
  list: string[];
  edit: boolean;
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const iconStyle = {
    width: 20,
    verticalAlign: "top",
    margin: 2,
    color: "white",
  };
  const [currentlyEditing, setCurrentlyEditing] = useState<string | null>(null);

  const deleteItem = useCallback(
    (item: string) => {
      setList((prev) => {
        return prev.filter((itemToRemove: string) => item !== itemToRemove);
      });
    },
    [setList],
  );

  return (
    <>
      <Container style={{ marginRight: 300 }}>
        <h3>Wish List</h3>
        {currentlyEditing && (
          <EditItemConfirmation
            item={currentlyEditing}
            onEdit={(_item, _currentValue) => {
              // blah blah
              setCurrentlyEditing(null);
            }}
            onCancel={() => setCurrentlyEditing(null)}
          />
        )}
        <ol>
          {list.map((item) => {
            if (edit) {
              return (
                <li key={item}>
                  <span style={{ marginRight: 10 }}>{item}</span>
                  <IconButton
                    size="small"
                    onClick={() => setCurrentlyEditing(item)}
                  >
                    <EditIcon style={iconStyle} />
                  </IconButton>
                  <IconButton size="small" onClick={() => deleteItem(item)}>
                    <DeleteIcon style={iconStyle} />
                  </IconButton>
                </li>
              );
            }
            return <li key={item}>{item}</li>;
          })}
        </ol>
      </Container>
    </>
  );
}
