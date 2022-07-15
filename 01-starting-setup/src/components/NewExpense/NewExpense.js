import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = props => {
  const [isOpen, setIsOpen] = useState(false)

  const saveExpenseDateHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
    setIsOpen(false)
  }

  const openFormHandler = () => {
    setIsOpen(true)
  }

  const closeFormHandler = () => {
    setIsOpen(false)
  }

  return (
    <div className='new-expense'>
      {!isOpen && (
        <button className='new-expense__button' onClick={openFormHandler}>
          Add New Expense
        </button>
      )}
      {isOpen && (
        <ExpenseForm
          onCancelClick={closeFormHandler}
          onSaveExpenseData={saveExpenseDateHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
