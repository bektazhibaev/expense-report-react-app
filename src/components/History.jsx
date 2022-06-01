import "../styles.css";

const History = ({ transactions, handleDelete, handleOpen, isOpen }) => {
  return (
    <div className="history">
      <h3>History</h3>
      {transactions.map((transaction) => {
        let classNameForTransaction = "transactions";
        classNameForTransaction +=
          transaction.amount > 0 ? " positive" : " negative";

        return (
          <div className={classNameForTransaction}>
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
    </div>
  );
};

export default History;
