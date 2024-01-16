import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 300px;
  background-color: ${p => p.theme.colors.white};

  margin: ${p => p.theme.spacing(3)};
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  display: block;
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: 50%;
  width: 150px;

  margin: ${p => p.theme.spacing(5)};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.spacing(6)};

  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const Tag = styled.p`
  font-size: ${p => p.theme.spacing(4)};
  color: ${p => p.theme.colors.greyText};

  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const Location = styled.p`
  font-size: ${p => p.theme.spacing(4)};
  color: ${p => p.theme.colors.greyText};

  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const StatsList = styled.ul`
  list-style: none;

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  background-color: #e6eaf0;
`;

export const StatsItem = styled.li`
  flex-basis: calc((100%) / 3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #d5d7da;
  &:nth-last-of-type(-n + 2) {
    border-left: 0;
  }

  padding-top: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(5)};
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.greyText};
`;

export const Quantity = styled.span`
  font-weight: 600;
`;
