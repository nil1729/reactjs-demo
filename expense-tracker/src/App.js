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
    <>
    <div className="container center main">
       <h4 style={{fontWeight:'700'}}>Expense Tracker</h4>
       <Balance/>
       <History/>
       <Transaction/>
    </div>
    <blockquote style={{width:'fit-content', margin:'2em auto'}}>Made With <span className="red-text">{'\u2764'}</span> by Nilanjan Deb</blockquote>
    </>
    </TxnState>
  )
}

export default App
