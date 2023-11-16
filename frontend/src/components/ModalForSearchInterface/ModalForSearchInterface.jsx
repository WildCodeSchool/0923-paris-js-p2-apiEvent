// import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";
import SearchInterface from "../../pages/SearchInterface/SearchInterface";
import "../../pages/SearchInterface/SearchInterface.css";
import useHandleCloseModalContext from "../../contexts/handleCloseModal";

function ModalForSearchInterface() {
  // const [open, setOpen] = useState(false);
  const { open, setOpen } = useHandleCloseModalContext();
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const style = () => {
    if (isMobile) {
      return {
        position: "absolute",
        backgroundColor: "#e9ecef",
        top: 0,
        left: 0,
        height: "calc(100% - 80px)",
        width: "100%",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        padding: 0,
        overflow: "scroll",
        bottom: "20px",
      };
    }
    if (isDesktop) {
      return {
        position: "absolute",
        backgroundColor: "#e9ecef",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        width: "40%",
        padding: 0,
        height: "80%",
        p: 4,
        overflow: "scroll",
      };
    }
    return {};
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
        // open={true}
        open={handleOpen}
        // onClose={handleClose}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ style: modalBackdropStyle }}
        className={`modalAnimation ${open ? "close" : ""}`}
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

export default ModalForSearchInterface;
