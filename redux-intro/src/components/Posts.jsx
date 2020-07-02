import React from 'react'
import PropTypes from 'prop-types'
import PostItem from './PostItem';

const Posts = ({ loading, posts }) => {
    return (
        <>
            <div className="display-4 text-center">Posts</div>
            {
                loading ? (<p className="lead mt-4">Loading....</p>) : (
                    <div className="list-grop mt-4">
                        {
                            posts.map(post => (
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
    loading: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired,
}

export default Posts
