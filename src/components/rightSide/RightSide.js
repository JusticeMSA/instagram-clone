import React from 'react';
import './RightSide.scss';
import ProfilePIcture from '../../pfp.jpg';

const RightSide = () =>{
    return(
        <div className='right-side'>
            <div className='user'>
                <img src={ProfilePIcture} alt='' />
                <div className='user-info'>
                    <p className='user-name'> justice_msa</p>
                    <p className='disp-name'>Justice M</p>
                </div>
            </div>

            <div className='suggestions'>
                <p>Suggestions for you</p>
                <a href='/'>See All</a>
            </div>
            <div className='suggestion-list'>
                <div className='suggestion'>
                    <img src={ProfilePIcture} alt='' />
                    <div className='user-info'>
                        <p className='user-name'> justice_msa</p>
                        <p className='disp-name'>Justice M</p>
                    </div>
                    <a href='/'>FOLLOW</a>
                </div>
                <div className='suggestion'>
                    <img src={ProfilePIcture} alt='' />
                    <div className='user-info'>
                        <p className='user-name'> justice_msa</p>
                        <p className='disp-name'>Justice M</p>
                    </div>
                    <a href='/'>FOLLOW</a>
                </div>
                <div className='suggestion'>
                    <img src={ProfilePIcture} alt='' />
                    <div className='user-info'>
                        <p className='user-name'> justice_msa</p>
                        <p className='disp-name'>Justice M</p>
                    </div>
                    <a href='/'>FOLLOW</a>
                </div>
            </div>
        </div>
    );
}

export default RightSide