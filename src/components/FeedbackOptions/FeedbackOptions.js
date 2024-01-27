import { Button, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(key => (
        <Button onClick={onLeaveFeedback} name={key} key={key}>
          {key}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
