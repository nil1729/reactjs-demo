import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import HistoryItem from './HistoryItem';

import TxnContext from '../context/transactions/txnContext';

const History = () => {
    const txnContext = useContext(TxnContext);
    const {transactions} = txnContext;

    return (
    <div className="container">
        <h5 className="left-align">History</h5>
        <hr/>
        <ul className="collection">
            {
                transactions.length>0?
                    transactions.map(history => (
                        <HistoryItem key={history.id} history={history}/>
                    ))
                :(
                    <p className="flow-text indigo-text">No Transactions to Show </p>
                )
            }
      </ul>
    </div>
  )
}


export default History
