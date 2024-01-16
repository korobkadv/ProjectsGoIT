import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;

  &:nth-of-type(-n + 4) {
    flex-basis: calc((100% - 20px) / 3);
  }
`;
