import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function EditItemConfirmation({
  item,
  onCancel,
  onEdit,
}: {
  item: string;
  onCancel: () => void;
  onEdit: (old: string, update: string) => void;
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
            label={item}
            value={currentValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCurrentValue(event.target.value);
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
