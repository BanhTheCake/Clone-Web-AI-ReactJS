import React from 'react';
import Features from '../../components/features/Features';
import './_future.scss';

const futureList = [
    {
        title: 'Improving end distrusts instantly',
        desc: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
        title: 'Become the tended active',
        desc: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
        title: 'Message or am nothing',
        desc: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
        title: 'Really boy law county',
        desc: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
];

const Future = () => {
    return (
        <>
            <div className="future__container">
                <div className="future__title">
                    <h2 className="title gradient__text">
                        The Future is Now and You Just Need to Realize It. Step
                        into Future Today. & Make it Happen.
                    </h2>
                    <p>Request Early Access to Get Started</p>
                </div>
                <div className="future__info">
                    {futureList &&
                        futureList.length > 0 &&
                        futureList.map((item) => (
                            <Features
                                title={item.title}
                                desc={item.desc}
                                direction="row"
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Future;
