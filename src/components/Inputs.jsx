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

      <form action="" className="inputForm">
        <div className="input-div">
          <label htmlFor="transaction-name">Reason: </label>

          <input
            name="transaction-name"
            id="transaction name"
            type="text"
            placeholder="Enter text..."
            onChange={(e) => handleInputs(e)}
            value={transactionName}
          />
        </div>
        <div className="input-div">
          <label htmlFor="transaction-amount">
            Amount (negative - expense, positive - income)
          </label>

          <input
            value={transactionAmount}
            name="transaction-amount"
            id="transaction amount"
            type="number"
            placeholder="Enter amount..."
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="submit-btn">
          <input className="submitBtn" type="submit" value="Add transaction" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Inputs;
