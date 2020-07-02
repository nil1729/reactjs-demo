import React from 'react'
import PropTypes from 'prop-types'

const PostItem = ({ post }) => {
    return (
        <>
            <div style={{ cursor: 'pointer' }} className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{post.title}</h5>
                </div>
                <p className="mb-1">{post.body}</p>
            </div>
        </>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PostItem
