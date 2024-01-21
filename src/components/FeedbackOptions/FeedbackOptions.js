import { Button, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {Object.keys(options).map(key => (
        <Button onClick={onLeaveFeedback} name={key} key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
