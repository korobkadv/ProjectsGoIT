import styled from 'styled-components';

export const ReviewsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ReviewsItem = styled.li`
  width: 100%;
  border: 1px solid #ccc;

  padding: ${p => p.theme.spacing(1)};

  display: flex;
  flex-direction: column;
  align-items: start;
`;
