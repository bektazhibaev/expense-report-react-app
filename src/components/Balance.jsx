const Balance = ({ income, expense }) => {
  return (
    <div className="balance">
      <p>Your balance</p>
      <div className="balance-amount">${(income - Math.abs(expense)).toFixed(2)}</div>
    </div>
  );
};

export default Balance;
