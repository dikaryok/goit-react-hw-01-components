// 
import styled from '@emotion/styled'

export const ProfileBox = styled.div`
    width: 300px;
    margin-bottom: 20px;
    box-shadow: 6px 6px 12px 4px rgba(34, 60, 80, 0.13);
    
   
`;

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: #fff;
    color: inherit;


`

export const ProfileAvatar = styled.img`
    margin-bottom: 20px;
  width: 130px;
  height: 130px;
  /* border: 1px solid #e7ecf2; */
  border-radius: 50%;
`

export const ProfileUsername = styled.p`
      margin-bottom: 10px;
  font-weight: 700;
  font-size: 25px;
`

export const ProfileTag = styled.p`
      margin-bottom: 10px;
  font-size: 16px;
  color: #959ca3;

`

export const ProfileLocation = styled.p`
      font-size: 16px;
  color: #959ca3;
`
export const ProfileStats = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #e7ecf2;
`

export const ProfileStatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  outline: 1px solid #959ca3;

`

export const ProfileLabel = styled.span`
  margin-bottom: 5px;
  color: #959ca3;


`

export const ProfileQuantity = styled.span`
    font-weight: 700;


`