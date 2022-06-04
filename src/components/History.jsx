import { useState } from "react";
import "../styles.css";

const History = ({ transactions, handleDelete, handleOpen }) => {

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    if (page > 0) setPage(page => page - 1)
  }

  const handleNext = () => {
    if (transactions.length/2 > page + 1) setPage(page => page + 1)
  }
  return (
    <div className="history">
      <h3>History</h3>
      {transactions.slice(page * 4, page * 4 + 4).map((transaction) => {
        let classNameForTransaction = "transactions";
        classNameForTransaction +=
          transaction.amount > 0 ? " positive" : " negative";

        return (
          <div className={classNameForTransaction} key={transaction.id}>
            <div className="transaction-info">
              <p className="transaction-name">{transaction.name}</p>
              <p className="transaction-amount">{transaction.amount}</p>
            </div>
            <div className="btns">
              <button onClick={() => handleOpen(transaction)}>Edit</button>
              <button onClick={() => handleDelete(transaction)}>Delete</button>
            </div>
          </div>
        );
      })}
      <div className="prevNextBtns">
        <button disabled={ page <= 0 } onClick={handlePrev}>Prev</button>
        <button disabled={Math.floor(transactions.length/4) <= page} onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default History;
