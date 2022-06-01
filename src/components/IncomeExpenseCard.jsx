import "../styles.css";

const IncomeExpenseCard = ({ transactions, income, expense }) => {
  return (
    <div className="income-expense">
      <div className="income">
        <h4>Income</h4>
        <p className="balance-small">${income.toFixed(2)}</p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p className="balance-small">${expense.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenseCard;
