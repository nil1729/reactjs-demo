import React, {useContext, useEffect} from 'react'
import TxnContext from '../context/transactions/txnContext';

const Balance = () => {
    const txnContext = useContext(TxnContext);
    const {balance, income, expense, getData} = txnContext;
    useEffect(()=>{
        getData();
        // eslint-disable-next-line
    },[]);
    const balanceStyle = () => {
        return {
            fontWeight: '600',
            color: balance>0?'green':balance===0?'':'red',
        }
    }

  return (
    <div className="container" style={{textTransform: 'uppercase'}}>
        <div className="card-panel">
            <p className="left-align" style={{fontSize:'1.2em'}}>Your Balance</p>
            <h4 className="left-align" style={balanceStyle()}>{balance<0?'- ':''}{`$`}{balance>0?balance:-balance}</h4>
        </div>
        <div className="white row balance">
            <div className="col s6">
                <p className="flow-text">
                    Income
                </p>
                <p className="flow-text green-text" style={{fontWeight: '500'}}>
                {`$`}{income}
                </p>
            </div>
            <div className="col s6">
                <p className="flow-text">
                    Expense
                </p>
                <p className="flow-text red-text" style={{fontWeight: '500'}}>
                {`$`}{expense}
                </p>
            </div>
        </div>
    </div>
  )
}


export default Balance
