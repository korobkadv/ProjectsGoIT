import styled from 'styled-components';

export const SectionStatistics = styled.section`
  width: 400px;
  background-color: ${p => p.theme.colors.white};

  margin: ${p => p.theme.spacing(3)};

  text-align: center;
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.greyText};
  text-transform: uppercase;
  font-weight: 400;

  padding: ${p => p.theme.spacing(3)};
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const StatsItem = styled.li`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${p => p.theme.colors.white};
  background-color: ${getRandomColor};

  padding-top: ${p => p.theme.spacing(4)};
  padding-bottom: ${p => p.theme.spacing(4)};
`;

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
