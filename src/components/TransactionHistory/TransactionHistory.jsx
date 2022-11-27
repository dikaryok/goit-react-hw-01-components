import PropTypes from 'prop-types'
import {TxnTable, TxnHead, TxnBody, TxnBanner, TxnBannerText, TxnText} from './TransactionHistory.styled'

export const TransactionHistory = ({items}) => {
    return (
            <TxnTable>
  <TxnHead>
    <TxnBanner>
      <TxnBannerText>Type</TxnBannerText>
      <TxnBannerText>Amount</TxnBannerText>
      <TxnBannerText>Currency</TxnBannerText>
    </TxnBanner>
  </TxnHead>

            <TxnBody>
                {items.map(item => (
              <TxnBanner key={item.id}>
      <TxnText>{item.type}</TxnText>
      <TxnText>{item.amount}</TxnText>
      <TxnText>{item.currency}</TxnText>
    </TxnBanner>
        ))}
    
  </TxnBody>
</TxnTable>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
}