import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
import Card from "../UI/Card"
import "./Expenses.css"
import { useState } from "react"

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState("2019")

  const filterChangeHandler = year => {
    setSelectedYear(year)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          filteredYear={selectedYear}
          value={selectedYear}
          onYearChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  )
}

export default Expenses
