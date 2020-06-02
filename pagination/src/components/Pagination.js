import React from 'react'

const Pagination = ({postsPerPage, posts, paginate, currentNum}) => {

    const paginationNums = [];
    for(let i=1;i<=Math.ceil(posts/postsPerPage); i++){
        paginationNums.push(i);
    }

  return (
    <div className="container text-center mt-3">
        <nav>
            <ul className="pagination justify-content-center">
                {
                    paginationNums.map(number =>
                        number === currentNum ? <li className="page-item active" key={number}>
                            <a onClick={(e)=>{paginate(number); e.preventDefault();}} className="page-link" href={`#${number}`}>{number}</a>
                        </li> : <li className="page-item" key={number}>
                            <a onClick={(e)=>{paginate(number); e.preventDefault();}} className="page-link" href={`#${number}`}>{number}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    </div>
  )
}

export default Pagination;
