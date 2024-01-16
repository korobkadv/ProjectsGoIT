import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 600px;
  margin: ${p => p.theme.spacing(3)};

  background-color: ${p => p.theme.colors.white};
`;

export const TableHead = styled.th`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.acent};

  padding: ${p => p.theme.spacing(2)};
`;

export const TableRow = styled.tr`
  color: ${p => p.theme.colors.greyText};
  text-align: center;

  &:nth-child(2n + 2) {
    background-color: ${p => p.theme.colors.grey};
  }
`;

export const TableColumn = styled.td`
  padding: ${p => p.theme.spacing(2)};
`;
