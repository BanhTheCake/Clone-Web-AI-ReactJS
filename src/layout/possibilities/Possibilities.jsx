import React from 'react';
import './_possibilities.scss';
import possibilities from '../../assets/possibility.png'

const Possibilities = () => {
    return (
        <div className="possibilities__container">
            <div className="img-wrapper">
                <img src={possibilities} alt="" />
            </div>
            <div className="possibilities__info">
                <p>Request Early Access to Get Started</p>
                <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <p>Request Early Access to Get Started</p>
            </div>
        </div>
    );
};

export default Possibilities;
