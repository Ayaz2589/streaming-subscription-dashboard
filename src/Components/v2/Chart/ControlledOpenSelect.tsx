import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ControlledOpenSelect = () => {
  const [age, setAge] = useState<string | number>("quarterly");
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          size="small"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          defaultValue={age}
          onChange={handleChange}
        >
          <MenuItem value={"monthly"} disabled>
            Monthly
          </MenuItem>
          <MenuItem value={"quarterly"} selected={true}>
            Quarterly
          </MenuItem>
          <MenuItem value={"yearly"} disabled>
            Yearly
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ControlledOpenSelect;
