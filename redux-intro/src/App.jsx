import React, { useEffect, useState } from 'react'
import Posts from './components/Posts.jsx'
import AddPost from './components/AddPost.jsx'
import axios from 'axios';


const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const config = {
        baseURL: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('/', config);
        setPosts(res.data);
        setLoading(false);
    }
    useEffect(() => {
        fetchPosts();
        // eslint-disable-next-line
    }, []);
    const addPost = async (post) => {
        const res = await axios.post('/', post, config);
        setPosts([res.data, ...posts]);
    };
    return (
        <div className="container">
            <div style={{ position: 'relative' }} className="jumbotron pt-1 pb-3">
                <AddPost newPost={addPost} />
                <Posts posts={posts} loading={loading} />
            </div>
        </div>
    )
}

export default App
