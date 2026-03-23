function TransactionItem({ item, deleteTransaction }) {
  return (
    <div className="transaction-item">
      <div>
        <strong>{item.title}</strong>
        <p className={item.type}>
          {item.type === 'income' ? '+' : '-'}RM {item.amount.toFixed(2)}
        </p>
        <small className="date-text">{item.date}</small>
      </div>
      <button onClick={() => deleteTransaction(item.id)}>Delete</button>
    </div>
  )
}

export default TransactionItem