import React ,{useState} from 'react'

const AddItem = (props) => {
    const [input, setInput] = useState({
            title: '',
            imgUrl: '',
            nfUrl: ''
    });
    const [errorStyle, setError] = useState({});
    const onSubmit = (e) => {
        e.preventDefault();
        if(input.title == '' || input.imgUrl == '' || input.nfUrl == ''){
            setError({
                borderColor:'red',
                borderWidth:'2px'
            });
            setTimeout(() => {
               setError({}); 
            }, 1500);
        }else{
            props.addItem(input);
            setInput({
                title: '',
                imgUrl: '',
                nfUrl: ''
            });
        }
    }
    const onChange = e =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
  return (
    <>
        <form onSubmit={onSubmit}>
            <div className="input-div">
                <input 
                    style={errorStyle}
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={input.title}
                    onChange={onChange}
                />
                <input 
                    style={errorStyle}
                    type="url"
                    placeholder="Image URL"
                    value={input.imgUrl}
                    name="imgUrl"
                    onChange={onChange}
                />
                <input 
                    style={errorStyle}
                    type="url"
                    placeholder="Netflix URL"
                    value={input.nfUrl}
                    name="nfUrl"
                    onChange={onChange}
                />
            </div>
            <button type="submit">ADD</button>
        </form>
    </>
  )
}

export default AddItem
