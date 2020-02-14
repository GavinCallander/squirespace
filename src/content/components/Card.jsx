// dependencies
import React from 'react';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandMiddleFinger, faHeart } from '@fortawesome/free-solid-svg-icons';

export const Card = props => {

    let back;
    let backStyle;

    return (
        <div className='card' >
            <div className='card-inner' style={props.style}>
                <div className='card-front'>
                    <img className='card-img' src='https://www.placecage.com/200/300' alt='' />
                    <div className='card-section'>
                        <h4>Name: </h4>
                        <h4 className='card-filler'>{props.name}</h4>
                    </div>
                    <div className='card-section'>
                        <h4>Age: </h4>
                        <h4 className='card-filler'>{props.age}</h4>
                    </div>
                    <div className='card-bio'>
                        <h4>Bio</h4>
                        <p>{props.bio}</p>
                    </div>
                    <div className='card-response'>
                        <FontAwesomeIcon className='card-response-icon' icon={faHandMiddleFinger} size='3x' onClick={(e) => props.handleLeft(e, '')} /> 
                        <FontAwesomeIcon className='card-response-icon' icon={faHeart} size='3x' onClick={(e) => props.handleRight(e, '')} />
                    </div>
                </div>
                <div className='card-back' style={props.backStyle}>
                    {props.back}
                </div>
            </div>
        </div>
    )
};