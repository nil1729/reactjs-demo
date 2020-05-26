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
        <div className="form-div container">
            <form onSubmit={onSubmit} className="my-2">
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        value={text}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn search-btn col"> Search </button>
            </form>
                {
                    githubContext.users.length > 0 && <div className="clear">
                                <button onClick={githubContext.clear} type="submit" className="btn">Clear Search</button>
                            </div>
                }        
        </div>
    )
}

export default Search;
