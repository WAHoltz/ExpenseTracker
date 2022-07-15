import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import "./Expenses.css"
import { useState } from "react"

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState("2019")

  const filterChangeHandler = year => {
    setSelectedYear(year)
  }

  // console.log(selectedYear)

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          filteredYear={selectedYear}
          value={selectedYear}
          onYearChange={filterChangeHandler}
        />
        {props.items
          .filter(
            expense => expense.date.getFullYear().toString() === selectedYear
          )
          .map(expense => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  )
}

export default Expenses
