import React , {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const  Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');
    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        if(text ===''){
            alertContext.setAlert('Please Enter Something', 'warning');            
        }else{
            githubContext.searchUser(text);
            setText('');
        }
    }
    return (
        <div className="container my-2">
            <form onSubmit={onSubmit} className="my-2">
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        value={text}
                        onChange={onChange}
                    />
                    </div>
                    <button type="submit" className="btn btn-dark col">Submit</button>
                </form>
                {
                    githubContext.users.length > 0 && <button onClick={githubContext.clear} type="submit" className="btn btn-secondary col">Clear Search</button>
                }
                
            </div>
    )
}

export default Search;
