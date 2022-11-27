// 
import styled from '@emotion/styled'

export const FriendListItemLi = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border: 1px solid #959ca3;
    border-radius: 5px;
        box-shadow: 6px 6px 12px 4px rgba(34, 60, 80, 0.13);

    
  :not(:last-child){ margin-bottom: 10px;}
    
`

export const FriendListItemStatus = styled.span`
    margin-right: 10px;
    width: 15px;
    height: 15px;
    background-color: ${({isOnline}) => isOnline ? 'green' : 'red'};
    border-radius: 50%;

`

export const FriendListItemAvatar = styled.img`
    margin-right: 20px;
    width: 48px;
`
export const FriendListItemName = styled.p`
    font-weight: 700;
`