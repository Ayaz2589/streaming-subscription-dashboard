import * as React from "react";
import { Snackbar as MUISnackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type SnackbarProps = {
  type: string | null;
  handleClose: () => void;
};

const Snackbar = ({ type, handleClose }: SnackbarProps) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (type === "jwtExpired") {
      setMessage("Session Expired. Please login again to continue.");
      setOpen(true);
    }
  }, [type]);

  const closeSnackbar = () => {
    setOpen(false);
    handleClose();
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <MUISnackbar
        open={open}
        onClose={closeSnackbar}
        message={message}
        action={action}
      />
    </div>
  );
};

export default Snackbar;
