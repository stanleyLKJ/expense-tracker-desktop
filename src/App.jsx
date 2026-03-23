import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('expense')
  const [transactions, setTransactions] = useState([])

  const addTransaction = () => {
    if (title.trim() === '' || amount === '') return

    const newTransaction = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      type
    }

    setTransactions([...transactions, newTransaction])
    setTitle('')
    setAmount('')
    setType('expense')
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id))
  }

  const balance = transactions.reduce((total, item) => {
    return item.type === 'income'
      ? total + item.amount
      : total - item.amount
  }, 0)

  return (
    <div className="app-container">
      <h1>Expense Tracker Desktop</h1>
      <p className="subtitle">My Electron Finance Application</p>

      <div className="balance-card">
        <h2>Current Balance</h2>
        <p>RM {balance.toFixed(2)}</p>
      </div>

      <div className="form-section">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button onClick={addTransaction}>Add Transaction</button>
      </div>

      <div className="transaction-list">
        {transactions.length === 0 ? (
          <p className="empty-message">No transactions yet.</p>
        ) : (
          transactions.map((item) => (
            <div key={item.id} className="transaction-item">
              <div>
                <strong>{item.title}</strong>
                <p className={item.type}>
                  {item.type === 'income' ? '+' : '-'}RM {item.amount.toFixed(2)}
                </p>
              </div>
              <button onClick={() => deleteTransaction(item.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App