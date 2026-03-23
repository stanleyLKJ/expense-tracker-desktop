function TransactionForm({
  title,
  setTitle,
  amount,
  setAmount,
  type,
  setType,
  addTransaction,
  clearAllTransactions
}) {
  return (
    <div className="form-section-wrapper">
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

      <div className="clear-section">
        <button className="clear-btn" onClick={clearAllTransactions}>
          Clear All
        </button>
      </div>
    </div>
  )
}

export default TransactionForm