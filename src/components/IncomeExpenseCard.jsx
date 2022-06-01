import "../styles.css";

const IncomeExpenseCard = ({ transactions, income, expense }) => {
  return (
    <div className="income-expense">
      <div className="income">
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenseCard;
