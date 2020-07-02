import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import PostItem from './PostItem';
import { connect } from 'react-redux';
import { fetchPosts, setLoading } from '../actions/postAction.js';


const Posts = ({ fetchPosts, post: { loading, items }, setLoading }) => {
    useEffect(() => {
        setLoading();
        fetchPosts();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className="display-4 text-center">Posts</div>
            <hr style={{ backgroundColor: '#f2f2f2' }} />
            {
                loading ? (<p className="lead mt-4">Loading....</p>) : (
                    <div className="list-grop mt-4">
                        {
                            items.map(post => (
                                <PostItem key={post.id} post={post} />
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

Posts.propTypes = {
    post: PropTypes.object.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { fetchPosts, setLoading })(Posts);
