// 
import PropTypes from 'prop-types'
import { StatisticsSection, StatisticsTitle, StatisticsList, StatisticsItem, StatisticsLabel, StatisticsPercentage } from './Statistics.styled'
import {getDarkColor} from '../../randomColor/randomColor'


export const Statistics = ({title, stats }) => {
    return (
        <StatisticsSection>
            {title && < StatisticsTitle>{ title}</StatisticsTitle>}

            <StatisticsList>
                {stats.map(stat => (
                    <StatisticsItem key={stat.id} darkColor={getDarkColor()}>
      <StatisticsLabel>{stat.label}</StatisticsLabel>
      <StatisticsPercentage>{stat.percentage}%</StatisticsPercentage>
    </StatisticsItem>
                ))}
    
  </StatisticsList>
</StatisticsSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,        }),
    ),
}