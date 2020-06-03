import React, {useEffect, useState} from 'react'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import {v4 as uuidv4} from 'uuid';

const Images = () => {
    const [photos, setPhotos] = useState([])
    const [start, setStart] = useState(1);

    const fetch = async () => {
        const res = await axios.get(`/api/photos?start=${start}`);
        setPhotos(photos.concat(res.data.results));
        setStart(start + 1);
    };
    useEffect(()=>{    
        fetch();
        // eslint-disable-next-line
    }, []);
  
    return (
        <InfiniteScroll
            dataLength={photos.length} 
            next={fetch}
            hasMore={true}
            loader={<p className="lead text-center">LOADING....</p>}
        >
        <div className="container img-container mb-4">
        {
            photos.map(photo=>(
                <img 
                    key={uuidv4()}
                    src= {photo.urls.small}
                    className="img-fluid"
                    alt="unsplash">
                </img>
            ))
        }
        </div>
        </InfiniteScroll>
    )
}

export default Images
