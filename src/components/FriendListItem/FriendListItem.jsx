// 
import PropTypes from 'prop-types'
import {FriendListItemLi, FriendListItemStatus, FriendListItemAvatar, FriendListItemName} from './FriendListItem.styled'

export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
        <FriendListItemLi>
  <FriendListItemStatus isOnline={isOnline}></FriendListItemStatus>
  <FriendListItemAvatar src={avatar} alt="User avatar"  />
  <FriendListItemName>{name}</FriendListItemName>
</FriendListItemLi>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};