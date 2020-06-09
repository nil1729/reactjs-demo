import React, {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';


// Components
import Balance from './components/Balance';
import History from './components/History';
import Transaction from './components/Transaction';

// Context APIs
import TxnState from './context/transactions/TxnState';

const App = () => {
  useEffect(()=>{
    M.AutoInit()
  })


  return (
    <TxnState>
    <div className="container center main">
       <h4 style={{fontWeight:'700'}}>Expense Tracker</h4>
       <Balance/>
       <History/>
       <Transaction/>
    </div>
    </TxnState>
  )
}

export default App
