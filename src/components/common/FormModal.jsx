import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  alpha,
  DialogActions,
  DialogContentText,
  useTheme,
  Button,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useStateContext } from "../../contexts/ContextProvider";

function FormModal({ title, link, children, buttonName }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { openModal, setOpenModal } = useStateContext();
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" timeout={30} ref={ref} {...props} />;
  });
  return (
    // <Dialog
    //   TransitionComponent={Transition}
    //   elevation={10}
    //   open={openModal}
    //   maxWidth="md"
    //   onClick={() => {
    //     setOpenModal(false);
    //     navigate(link);
    //   }}
    //   sx={{
    //     margin: "0 auto",
    //     padding: theme.spacing(2),
    //     top: theme.spacing(3),
    //   }}
    // >
    //   <DialogTitle>
    //     <Box
    //       display={"flex"}
    //       justifyContent={"space-between"}
    //       alignItems={"center"}
    //     >
    //       <Typography variant="h6" component="span" fontWeight={600}>
    //         {title}
    //       </Typography>
    //       <Button
    //         onClick={() => {
    //           setOpenModal(false);
    //           navigate(link);
    //         }}
    //         aria-label="Close"
    //         variant={"outlined"}
    //         size="small"
    //         sx={{
    //           borderRadius: 2,
    //           minWidth: "auto",
    //           padding: 1,
    //           margin: "2px",
    //           borderColor: alpha(theme.palette.divider, 0.2),
    //         }}
    //       >
    //         <CloseIcon sx={{fontSize: "20px"}} />
    //       </Button>
    //     </Box>
    //   </DialogTitle>
    //   <DialogContent dividers onClick={(e) => e.stopPropagation()}>
    //     {children}
    //   </DialogContent>
    // </Dialog>
    <Dialog
      open={openModal}
      onClose={() => {
        setOpenModal(false);
        navigate(link);
      }}
      TransitionComponent={Transition}
      elevation={10}
      maxWidth="md"
    >
      <DialogTitle>
        <Typography variant="h6" component="span" fontWeight={600}>
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText></DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOpenModal(false);
            navigate(link);
          }}
          sx={{
            textTransform: "none",
            color: "red",
            borderColor: "red",
            "&:hover": {
              borderColor: "red",
              boxShadow: "0 12px 15px rgb(140 152 164 / 10%)",
            },
          }}
          color="red"
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          color={"primary"}
          sx={{
            background: "primary",
            color: "white",
            "&:hover": {
              background: "primary",

              textTransform: "none",
            },
          }}
          variant="contained"
        >
          {buttonName}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormModal;
