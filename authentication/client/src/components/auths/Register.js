import React, {useState, useContext, useEffect} from 'react'


// Context
import AuthContext from '../../context/auths/authContext';
import AlertContext from '../../context/alerts/alertContext';



const Register = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;

    const {register, error, isAuthenticated, clearErrors} = authContext;

    useEffect(()=>{
        if(error!== null){
            setAlert(error, 'danger');
            clearErrors();
        }
        if(isAuthenticated){
            props.history.push('/home');
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [input, setInput] = useState({
        email: '',
        name: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = input;

    const onChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === '' || password === '' || password2 === ''){
            return setAlert('Please enter all fields', 'danger');
        }
        if(password2 !== password){
            return setAlert('Password do not Match', 'danger');
        }
        register({
            name,
            password,
            email
        });
    }

  return (
    <div className="jumbotron">
        <div className="container">
        <form onSubmit={onSubmit}>
            <h1 className="text-center">Register</h1>
            <div className="form-group">
                <label>Full Name</label>
                <input
                    name="name" 
                    type="text" 
                    className="form-control"
                    value={name}
                    onChange={onChange}    
                />
            </div>
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
            <div className="form-group">
                <label>Confirm Password</label>
                <input
                    autoComplete="secret"
                    name="password2"  
                    type="password" 
                    className="form-control"
                    value={password2}
                    onChange={onChange}
                    minLength="6"
                />
            </div>
            <button type="submit" className="btn btn-sm btn-success">Register</button>
        </form>
        </div>
    </div>
  )
}

export default Register
