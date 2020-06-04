import React, {useState, useContext, useEffect} from 'react'

// Context
import AuthContext from '../../context/auths/authContext';
import AlertContext from '../../context/alerts/alertContext';


const Register = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;

    const {login, error, isAuthenticated, clearErrors} = authContext;

    useEffect(()=>{
        if(error!== null && typeof error!= 'undefined'){
            if(error === 'Suucessfully Logged Out'){
                setAlert(error, 'success');
            }else{
                setAlert(error, 'danger');
            }
            clearErrors();
        }
        if(isAuthenticated){
            props.history.push('/home');
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const { email, password} = input;

    const onChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        if(email === '' || password === ''){
            return setAlert('Please enter all fields', 'danger');
        }
        login({
            password,
            email
        });
    }

  return (
    <div className="jumbotron">
        <div className="container">
        <form onSubmit={onSubmit}>
            <h1 className="text-center">Login</h1>
            <div className="form-group">
                <label>Email address</label>
                <input
                    name="email"  
                    type="email" 
                    className="form-control"
                    value={email}
                    onChange={onChange}    
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    autoComplete="secret"
                    name="password"  
                    type="password" 
                    className="form-control"
                    value={password}
                    onChange={onChange}
                    minLength="6"
                />
            </div>
            <button type="submit" className="btn btn-sm btn-success">Login</button>
        </form>
        </div>
    </div>
  )
}

export default Register
