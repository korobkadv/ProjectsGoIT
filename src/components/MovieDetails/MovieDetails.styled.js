import styled from 'styled-components';

export const MovieCard = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 200px;
  float: left;

  margin-right: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;

  margin-top: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const GenresItem = styled.li`
  &::after {
    content: ',';
  }
  &:last-child::after {
    content: '.';
  }
`;
