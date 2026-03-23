function BalanceCard({ balance }) {
  return (
    <div className="balance-card">
      <h2>Current Balance</h2>
      <p>RM {balance.toFixed(2)}</p>
    </div>
  )
}

export default BalanceCard