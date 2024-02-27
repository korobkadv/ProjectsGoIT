import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const SectionWrapper = styled.div`
  width: 350px;
  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.spacing(3)};
  box-shadow: 3px 5px 5px ${p => p.theme.colors.greyText};

  padding: ${p => p.theme.spacing(3)};
  margin: ${p => p.theme.spacing(6)};
`;
