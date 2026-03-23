function BalanceCard({ balance, totalIncome, totalExpense }) {
  return (
    <div className="balance-card">
      <h2>Current Balance</h2>
      <p>RM {balance.toFixed(2)}</p>

      <div className="summary-cards">
        <div className="summary-box income-box">
          <h3>Total Income</h3>
          <p>RM {totalIncome.toFixed(2)}</p>
        </div>

        <div className="summary-box expense-box">
          <h3>Total Expense</h3>
          <p>RM {totalExpense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default BalanceCard