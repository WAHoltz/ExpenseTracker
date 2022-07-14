import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  let expenseItems = [];
  props.items.map((expense, key) =>
    expenseItems.push(
      <ExpenseItem
        key={key}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )
  );

  return (
    <div>
      <ExpensesFilter />
      <Card className="expenses">{expenseItems}</Card>
    </div>
  );
};

export default Expenses;
