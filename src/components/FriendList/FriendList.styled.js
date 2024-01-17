import styled from 'styled-components';

export const Friends = styled.ul`
  width: 180px;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  margin: ${p => p.theme.spacing(3)};
`;
