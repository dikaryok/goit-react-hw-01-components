// 
import PropTypes from 'prop-types'
import { FriendListUl } from './FriendList.styled'
import {FriendListItem} from '../FriendListItem/FriendListItem'

export const FriendList = ({friends}) => {
    return (
        <FriendListUl>
            {friends.map(friend => (
                <FriendListItem key={friend.id} avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}>
                    
                </FriendListItem>
            ))}
</FriendListUl>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({id: PropTypes.number.isRequired,})

    )
}