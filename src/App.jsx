import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import BalanceCard from './components/BalanceCard'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('expense')
  const [transactions, setTransactions] = useState([])

  const addTransaction = () => {
    if (title.trim() === '' || amount === '') return

    const today = new Date().toLocaleDateString()

    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
      type,
      date: today
    }

    setTransactions([...transactions, newTransaction])
    setTitle('')
    setAmount('')
    setType('expense')
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id))
  }

  const clearAllTransactions = () => {
    setTransactions([])
  }

  const balance = transactions.reduce((total, item) => {
    return item.type === 'income'
      ? total + item.amount
      : total - item.amount
  }, 0)

  const totalIncome = transactions
    .filter((item) => item.type === 'income')
    .reduce((total, item) => total + item.amount, 0)

  const totalExpense = transactions
    .filter((item) => item.type === 'expense')
    .reduce((total, item) => total + item.amount, 0)

  return (
    <div className="app-container">
      <h1>Expense Tracker Desktop</h1>
      <p className="subtitle">My Electron Finance Application</p>

      <BalanceCard
        balance={balance}
        totalIncome={totalIncome}
        totalExpense={totalExpense}
      />

      <TransactionForm
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        type={type}
        setType={setType}
        addTransaction={addTransaction}
        clearAllTransactions={clearAllTransactions}
      />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  )
}

export default App