import TransactionItem from './TransactionItem'

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="transaction-list">
      {transactions.length === 0 ? (
        <p className="empty-message">No transactions yet.</p>
      ) : (
        transactions.map((item) => (
          <TransactionItem
            key={item.id}
            item={item}
            deleteTransaction={deleteTransaction}
          />
        ))
      )}
    </div>
  )
}

export default TransactionList