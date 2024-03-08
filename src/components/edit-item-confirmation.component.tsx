import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Item } from "../shared/types.ts";

export default function EditItemConfirmation({
  item,
  onCancel,
  onEdit,
}: {
  item: Item;
  onCancel: () => void;
  onEdit: (old: Item, update: Item) => void;
}) {
  const [currentValue, setCurrentValue] = useState(item);

  return (
    <>
      <Dialog open>
        <DialogTitle>Edit item</DialogTitle>
        <DialogContent>
          <TextField
            InputLabelProps={{ shrink: false }}
            variant="outlined"
            label={item.name}
            value={currentValue.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCurrentValue({ ...currentValue, name: event.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={() => onEdit(item, currentValue)}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
