import React from 'react';
import './LeftSide.scss';

//Imporet components
import StoryList from '../storyList/StoryList';
import TimelineList from '../timelineList/TimelineList';

const LeftSide = () =>{
    return(
        <div className='left-side'>
            <StoryList />
            <TimelineList />
        </div>
    );
}

export default LeftSide;