import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Icon } from "@iconify/react";
import SearchInterface from "../../pages/SearchInterface/SearchInterface";

export default function ModalForSearchInterface() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "calc(100% - 80px)",
    width: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    padding: 0,
    transform: open ? "translateY(0)" : "translateY(100%)",
    transition: "transform 0.5s ease-in",
  };

  const noBorderBtn = {
    padding: "0px",
  };

  const modalBackdropStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "calc(100% - 80px)",
  };

  return (
    <div className="modalSearchInterface">
      <Button onClick={handleOpen} style={noBorderBtn}>
        <Icon icon="charm:search" color="#E9ECEF" width="40" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ style: modalBackdropStyle }}
      >
        <Box sx={style}>
          <SearchInterface setOpen={setOpen} />
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
