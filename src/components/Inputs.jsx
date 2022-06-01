import "../styles.css";

const Inputs = ({
  handleInputs,
  handleSubmit,
  transactionName,
  transactionAmount
}) => {
  return (
    <div className="inputs">
      <h3>Add new transactions</h3>

      <form action="">
        <div className="labels">
          <label htmlFor="transaction-name">Reason</label>
        </div>
        <div>
          <input
            name="transaction-name"
            className="transaction name"
            type="text"
            placeholder="Enter text..."
            onChange={(e) => handleInputs(e)}
            value={transactionName}
          />
        </div>

        <div className="labels">
          <label htmlFor="transaction-amount">
            Amount (negative - expense, positive - income)
          </label>
        </div>
        <div>
          <input
            value={transactionAmount}
            name="transaction-amount"
            className="transaction amount"
            type="number"
            placeholder="Enter amount..."
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="submit-btn">
          <input type="submit" value="Add transaction" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Inputs;
