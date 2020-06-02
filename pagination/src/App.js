import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import PostPerPage from './components/PostPerPage';



const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [loading, setLoding] = useState(false);

  useEffect(()=>{
    const fetchPosts = async () => {
      setLoding(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoding(false);
    };
    fetchPosts();
    // eslint-disable-nextline
  }, []);




  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Pagination
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Set Posts Per Page 
  const changePPP = number => {
    setPostsPerPage(number);
    setCurrentPage(1);
  };

  return (
    <div className="p-4 bg-light">
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
            <h1 className="text-primary lead mb-3">Pagination React</h1>
        </div>
        <div className="col-md-4">
            <PostPerPage changePPP={changePPP}/>
        </div>
      </div>
        
      <Posts 
        posts={currentPosts}
        loading={loading}
      />
      <Pagination 
        posts={posts.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentNum={currentPage}
      />
    </div>
  )
}

export default App
