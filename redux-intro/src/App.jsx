import React from 'react'
import Posts from './components/Posts.jsx'
import AddPost from './components/AddPost.jsx'

//! Redux Essentials
import { Provider } from 'react-redux';
import store from './store.js';


const App = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <div style={{ position: 'relative' }} className="jumbotron pt-1 pb-3">
                    <AddPost />
                    <Posts />
                </div>
            </div>
        </Provider>
    )
}

export default App
