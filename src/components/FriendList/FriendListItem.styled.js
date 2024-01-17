import styled from 'styled-components';

export const FriendItem = styled.li`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${p => p.theme.colors.white};
  box-shadow: 3px 5px 5px ${p => p.theme.colors.greyText};

  margin-bottom: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(4)};
`;

export const FriendStatus = styled.span`
  display: block;

  width: 15px;
  height: 15px;

  border-radius: 50%;
  background-color: ${p => (p.$status === 'true' ? 'red' : 'green')};
`;

export const FriendAvatar = styled.img`
  display: block;
  width: 48px;

  padding-left: ${p => p.theme.spacing(4)};
`;

export const FriendName = styled.p`
  display: block;

  padding-left: ${p => p.theme.spacing(4)};
`;
