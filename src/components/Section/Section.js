import { SectionComponents, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionComponents>
      {title && <Title>{title}</Title>}
      {children}
    </SectionComponents>
  );
};
