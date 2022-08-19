import React from 'react';
import Features from '../../components/features/Features';
import './_wigt3.scss';

const Wigt3 = () => {
    return (
        <>
            <div className="wigt3__container">
                <div className="wigt3__row--1">
                    <Features
                        direction="row"
                        title="What is GPT 3"
                        desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
"
                    />
                </div>
                <div className="wigt3__row--2">
                    <p className="title gradient__text">
                        The possibilities are beyond your imagination
                    </p>
                    <p className="explore">Explore the library</p>
                </div>
                <div className="wigt3__row--3">
                    <Features
                        direction="column"
                        title="Chatbots"
                        desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
                    />
                    <Features
                        direction="column"
                        title="Knowledgebase"
                        desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
                    />
                    <Features
                        direction="column"
                        title="Education"
                        desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
                    />
                </div>
            </div>
        </>
    );
};

export default Wigt3;
