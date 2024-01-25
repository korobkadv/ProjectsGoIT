import { Submit } from './Button.styled';

export const Button = ({ title, loadMore }) => {
  return <Submit onClick={loadMore}>{title}</Submit>;
};
