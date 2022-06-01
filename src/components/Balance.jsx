const Balance = ({ income, expense }) => {
  return (
    <div className="balance">
      <p>Your balance</p>
      <div className="balance-amount">${income - Math.abs(expense)}</div>
    </div>
  );
};

export default Balance;
