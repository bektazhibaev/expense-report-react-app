import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../styles.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function BasicModal({
  isOpen,
  setIsOpen,
  editTransactionData,
  handleUpdate
}) {
  const [localTransaction, setLocalTransaction] = React.useState(
    editTransactionData
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  const updateTransactionName = (e) => {
    setLocalTransaction({ ...localTransaction, name: e.target.value });
  };
  const updateTransactionAmount = (e) => {
    const inputAmount = e.target.value;
    if (!isNaN(inputAmount)) {
      setLocalTransaction({
        ...localTransaction,
        amount: Number(e.target.value)
      });
    }
  };

  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button className="closeBtn" onClick={handleClose}>
            Close
          </button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update transaction
          </Typography>
          <form action="" className="modal-form">
            <label htmlFor="transaction-name">Transaction name:</label>
            <input
              className="inputForm"
              type="text"
              value={localTransaction.name}
              onChange={(e) => updateTransactionName(e)}
            />
            <label htmlFor="transaction-name">Transaction amount:</label>
            <input
              className="inputForm"
              type="text"
              value={localTransaction.amount}
              onChange={(e) => updateTransactionAmount(e)}
            />

            <input
              type="button"
              value="Update"
              className="inputForm"
              onClick={() => handleUpdate(localTransaction)}
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
