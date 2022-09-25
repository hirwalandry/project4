import React from "react";
import {useNavigate} from "react-router-dom"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  alpha,
  useTheme,
  Button,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useStateContext } from "../../contexts/ContextProvider";

function FormModal({ title, link, children }) {
  const theme = useTheme();
  const navigate = useNavigate()
  const { openModal, setOpenModal } = useStateContext();
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" timeout={30} ref={ref} {...props} />;
  });
  return (
    <Dialog
      TransitionComponent={Transition}
      elevation={10}
      open={openModal}
      maxWidth="md"
      onClick={() => {
        setOpenModal(false);
        navigate(link);
      }}
      sx={{
        margin: "0 auto",
        height: "75vh",
        position: "absolute",
        padding: theme.spacing(2),
        top: theme.spacing(5),
      }}
    >
      <DialogTitle>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" component="span" fontWeight={600}>
            {title}
          </Typography>
          <Button
            onClick={() => {
              setOpenModal(false);
              navigate(link);
            }}
            aria-label="Close"
            variant={"outlined"}
            sx={{
              borderRadius: 2,
              minWidth: "auto",
              padding: 1,
              margin: "2px",
              borderColor: alpha(theme.palette.divider, 0.2),
            }}
          >
            <CloseIcon />
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent dividers onClick={(e) => e.stopPropagation()}>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default FormModal;
