// 
import styled from '@emotion/styled'

export const StatisticsSection = styled.section`
    width: 300px;
    margin-bottom: 20px;
    
    box-shadow: 6px 6px 12px 4px rgba(34, 60, 80, 0.13);
    
`

export const StatisticsTitle = styled.h2`
    padding: 30px 0;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    text-transform: uppercase;
    color: #959ca3;
    background-color: #fff;
`
export const StatisticsList = styled.ul`
    display: flex;
    justify-content: center;
`

export const StatisticsItem = styled.li`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  outline: 1px solid #959ca3;
    background-color: ${({ darkColor }) => darkColor};

  color: #fff;
`

export const StatisticsLabel = styled.span`
    margin-bottom: 5px;
`

export const StatisticsPercentage = styled.span`
    font-weight: 600;
        font-size: 20px;

`