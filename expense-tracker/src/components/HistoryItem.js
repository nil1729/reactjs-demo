import React from 'react'
import PropTypes from 'prop-types'

const HistoryItem = ({history}) => {
    const borderStyle = () => {
        return {
            margin:'10px 0',
            borderRight:'5px solid',
            borderColor: history.amount>0?'green':'red'
        }
    }
  return (
    <li className="collection-item z-depth-1" style={borderStyle()}>
        <div className="left-align">
            {history.text}<span className="secondary-content" style={{fontSize:'1.2em', fontWeight:'500'}}>{history.amount>0?'+':''}{history.amount}</span>
        </div>
    </li>
  )
}

HistoryItem.propTypes = {
    history: PropTypes.object.isRequired,
}

export default HistoryItem
