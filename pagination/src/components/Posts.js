import React from 'react'

const Posts = ({posts, loading}) => {
    if(loading){
        return(
            <p className="lead text-success">Loding.....</p>
        )
    }
    return (
        <ul className="list-group">
        {
            posts.map(post=>(
                <li
                    key={post.id} 
                    className="list-group-item"
                >
                <span className="text-danger mr-3">{post.id}.</span>
                {post.title}
                </li>
            ))
        }
        </ul>
  )
}

export default Posts
