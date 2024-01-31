import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MovieCard = styled.div`
  width: 90%;
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

export const Information = styled.div`
  width: 100%;
`;

export const InformationLinksList = styled.ul`
  padding: ${p => p.theme.spacing(3)};
`;

export const BackLink = styled.b`
  width: 100px;
  text-align: center;
  display: block;

  padding: ${p => p.theme.spacing(2)};
  margin-bottom: ${p => p.theme.spacing(2)};

  border: 1px solid #ccc;
  border-radius: ${p => p.theme.spacing(3)};
`;
