import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';
import TxnContext from '../context/transactions/txnContext';

const Transaction = () => {
    const txnContext = useContext(TxnContext);
    const {addTxn, updateExpense} = txnContext;

    const [input, setInput] = useState({
        text:'',
        amount:''
    });
    const {text, amount} = input;

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        });
    };
    const onSubmit =(e) => {
        e.preventDefault();
        if(text.trim() === '' || !text.match(/([a-zA-Z])+([ -~])*/)){
            M.toast({html: 'Please enter some text'})
        }
        else if(parseFloat(amount) === 0){
            M.toast({html: 'Please enter some amount'})
        }else{
        // Call Context API
        addTxn(text, parseFloat(amount));
        updateExpense(parseFloat(amount));
        setInput({
            text:'',
            amount:''
        })
    }
    };


  return (
    <div className="container">
        <h5 className="left-align">Add New Transaction</h5>
        <hr/>
        <form onSubmit={onSubmit} style={{marginBottom:'2em'}}>
        <div className="row">
            <div className="input-field col s12">
                <i className="material-icons prefix">create</i>
                <input
                    required
                    name="text"
                    value={text}
                    onChange={onChange}
                    id="icon_prefix" 
                    type="text" 
                    className="validate"/>
                <label htmlFor="icon_prefix">Enter Text</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <i className="material-icons prefix">monetization_ont</i>
                <input
                    required
                    name="amount"
                    value={amount}
                    onChange={onChange}
                    id="icon_prefix" 
                    type="number" 
                    className="validate"/>
                <label htmlFor="icon_prefix">Enter Amount</label>
                <span className="helper-text left-align black-text">Negetive - Expense & Positive - Income</span>
            </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Add Transaction
            <i className="material-icons right">send</i>
        </button>
        </form>
    </div>
  )
}

Transaction.propTypes = {

}

export default Transaction
