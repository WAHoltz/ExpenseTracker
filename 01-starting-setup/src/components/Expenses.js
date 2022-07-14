import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  let expenseItems = [];
  props.expenses.map((expense) =>
    expenseItems.push(
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )
  );

  return <div className="expenses">{expenseItems}</div>;
};

export default Expenses;
