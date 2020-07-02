import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types';

const AddPost = ({ newPost }) => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal);
    }
    const titleEl = useRef();
    const bodyEl = useRef();
    const handleSubmit = async e => {
        e.preventDefault();
        const title = titleEl.current.value;
        const body = bodyEl.current.value;
        await newPost({ title, body, userId: Math.ceil(Math.random() * 10) });
        setShowModal(!showModal);
    };
    return (
        <>
            <button onClick={handleModal} className="add-post-btn btn btn-primary">Add Post</button>
            <div className="modal" style={{ display: `${showModal ? 'block' : ''}` }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Post</h5>
                            <button onClick={handleModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        ref={titleEl}
                                        required
                                        className="form-control"
                                        placeholder="Enter Post Title" />
                                </div>
                                <div className="form-group">
                                    <label>Write Something about Post</label>
                                    <textarea ref={bodyEl} required className="form-control" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

AddPost.propTypes = {
    newPost: PropTypes.func.isRequired,
}

export default AddPost
