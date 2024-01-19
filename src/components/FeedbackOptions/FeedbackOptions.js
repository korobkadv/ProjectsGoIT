import { Button, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ updateState }) => {
  return (
    <ButtonWrapper>
      <Button onClick={updateState} name="good">
        Good
      </Button>
      <Button onClick={updateState} name="neutral">
        Neutral
      </Button>
      <Button onClick={updateState} name="bad">
        Bad
      </Button>
    </ButtonWrapper>
  );
};
