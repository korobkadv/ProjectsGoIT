import { SectionStatistics } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, positivePercentage }) => {
  return (
    <SectionStatistics>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </SectionStatistics>
  );
};
