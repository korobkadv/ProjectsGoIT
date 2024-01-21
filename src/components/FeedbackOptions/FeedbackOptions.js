import { Button, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(key => (
        <Button onClick={onLeaveFeedback} name={key.toLowerCase()} key={key}>
          {key}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
