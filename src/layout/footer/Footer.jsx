import React from 'react';
import FooterList from './components/footerList/FooterList';
import './_footer.scss';

const Footer = () => {

    return (
        <div className="footer__background">
            <div className="footer__container">
              <h3 className="title gradient__text">
              Do you want to step in to the future before others
              </h3>
              <div className="footer__button">
                <button>Request Early Access</button>
              </div>
              <div>
                <FooterList />
              </div>
              <p className='copyright'>@2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
