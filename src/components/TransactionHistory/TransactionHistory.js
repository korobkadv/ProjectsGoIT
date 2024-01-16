import {
  TransactionHistoryTable,
  TableHead,
  TableRow,
  TableColumn,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <TableRow key={item.id}>
              <TableColumn>{item.type}</TableColumn>
              <TableColumn>{item.amount}</TableColumn>
              <TableColumn>{item.currency}</TableColumn>
            </TableRow>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};
