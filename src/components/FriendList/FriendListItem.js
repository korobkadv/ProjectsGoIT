import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
  return (
    <FriendItem>
      <FriendStatus $status={friend.isOnline ? 'true' : 'false'} />
      <FriendAvatar src={friend.avatar} alt={friend.name} width="48" />
      <FriendName>{friend.name}</FriendName>
    </FriendItem>
  );
};
