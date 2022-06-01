import "./styles.css";
import Balance from "./components/Balance";
import IncomeExpenseCard from "./components/IncomeExpenseCard";
import History from "./components/History";
import Inputs from "./components/Inputs";
import { useState } from "react";
import { nanoid } from "nanoid";
import BasicModal from "./components/EditModal";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [editTransactionData, setEditTransactionData] = useState({});

  const income = transactions.reduce((prev, cur) => {
    return (prev += cur.amount > 0 ? cur.amount : 0);
  }, 0);

  const expense = transactions.reduce((prev, cur) => {
    return (prev += cur.amount < 0 ? cur.amount : 0);
  }, 0);

  const handleInputs = (e) => {
    let transactionInputType = e.target.name;
    if (transactionInputType === "transaction-name")
      setTransactionName(e.target.value);
    else setTransactionAmount(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transactionAmount && transactionName) {
      const newTransactions = [
        ...transactions,
        {
          id: nanoid(),
          name: transactionName,
          amount: transactionAmount
        }
      ];

      setTransactions(newTransactions);
    }
    setTransactionAmount("");
    setTransactionName("");
  };

  const handleDelete = (target) => {
    const copyTransactions = JSON.parse(JSON.stringify(transactions));

    const newTransactions = copyTransactions.filter(
      (item) => item.id !== target.id
    );

    setTransactions(newTransactions);
  };

  const handleOpen = (target) => {
    setIsOpen(!isOpen);

    setEditTransactionData(target);
  };

  const handleUpdate = (newTransactionData) => {
    const newTransactionsCopy = JSON.parse(JSON.stringify(transactions));

    let targetIndex = -1;
    newTransactionsCopy.forEach((element, index) => {
      if (element.id === editTransactionData.id) targetIndex = index;
    });

    newTransactionsCopy[targetIndex] = newTransactionData;
    setTransactions(newTransactionsCopy);
    setIsOpen(false);
  };

  return (
    <div className="App">
      {!isOpen ? (
        <div className="main">
          <header>
            <h1>Expense Tracker</h1>
          </header>
          <section className="balance-section">
            <Balance income={income} expense={expense} />
            <IncomeExpenseCard
              transactions={transactions}
              income={income}
              expense={expense}
            />
          </section>
          <section className="history-section">
            <History
              transactions={transactions}
              handleDelete={handleDelete}
              handleOpen={handleOpen}
              isOpen={isOpen}
            />
          </section>
          <section className="input-section">
            <Inputs
              handleInputs={handleInputs}
              handleSubmit={handleSubmit}
              transactionAmount={transactionAmount}
              transactionName={transactionName}
            />
          </section>
        </div>
      ) : (
        <BasicModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          editTransactionData={editTransactionData}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
}
