import styled from 'styled-components';

export const CastList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

export const CastItem = styled.li`
  width: 200px;
  border: 1px solid #ccc;

  padding: ${p => p.theme.spacing(1)};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 150px;
  margin: ${p => p.theme.spacing(3)};
`;
