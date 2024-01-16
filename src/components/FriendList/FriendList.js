import {
  Friends,
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            <FriendStatus $status={friend.isOnline ? 'true' : 'false'} />
            <FriendAvatar src={friend.avatar} alt={friend.name} width="48" />
            <FriendName>{friend.name}</FriendName>
          </FriendItem>
        );
      })}
    </Friends>
  );
};
