import React from 'react';
import './TimelineList.scss';

//Import components
import Post from '../post/Post';

const TimelineList = () =>{
    return(
        <div className='timeline-list'>
            <Post />
            <Post />
        </div>
    );
}

export default TimelineList;