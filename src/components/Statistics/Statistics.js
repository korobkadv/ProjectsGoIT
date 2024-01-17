import {
  SectionStatistics,
  Title,
  StatsList,
  StatsItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(stat => {
          return (
            <StatsItem key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}</span>
            </StatsItem>
          );
        })}
      </StatsList>
    </SectionStatistics>
  );
};
