//
import PropTypes from 'prop-types'
import { ProfileBox, ProfileDescription, ProfileAvatar, ProfileUsername, ProfileTag, ProfileLocation, ProfileStats, ProfileStatsList, ProfileLabel, ProfileQuantity } from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <ProfileBox>
  <ProfileDescription>
    <ProfileAvatar
      src={avatar}
      alt="User avatar"
      
    />
        <ProfileUsername> { username}</ProfileUsername>
    <ProfileTag>@{tag}</ProfileTag>
    <ProfileLocation>{location}</ProfileLocation>
  </ProfileDescription>

  <ProfileStats>
    <ProfileStatsList>
      <ProfileLabel>Followers</ProfileLabel>
      <ProfileQuantity>{stats.followers}</ProfileQuantity>
    </ProfileStatsList>
    <ProfileStatsList>
      <ProfileLabel>Views</ProfileLabel>
      <ProfileQuantity>{stats.views}</ProfileQuantity>
    </ProfileStatsList>
    <ProfileStatsList>
      <ProfileLabel>Likes</ProfileLabel>
      <ProfileQuantity>{stats.likes}</ProfileQuantity>
    </ProfileStatsList>
  </ProfileStats>
</ProfileBox>
    )
}

Profile.propTypes = {
    
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}