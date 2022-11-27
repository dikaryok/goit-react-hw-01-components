// 
import styled from '@emotion/styled'

export const TxnTable = styled.table`
      border-collapse: collapse;
    
    width: 300px;
`

export const TxnHead = styled.thead`
    `

export const TxnBody = styled.tbody`
    `

export const TxnBanner = styled.tr`
    background: #d5dce2;
    :nth-of-type(odd) {
    background: #fff;
  }
`

export const TxnBannerText = styled.th`
    padding: 10px 0;
    background: #00BCD5;
    color: #fff;
    text-transform: uppercase;
        border: 1px solid #00BCD5;
        :not(:last-child) {
            border-right-color: #fff;
        }

`

export const TxnText = styled.td`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    background: #fff;
    background-color: inherit;
    text-transform: capitalize;
    border: 1px solid #959ca3;

`