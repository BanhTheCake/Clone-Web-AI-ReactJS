import React from "react";
import './_home.scss'
import people from '../../../../assets/people.png'
import ai from '../../../../assets/ai.png'

const Home = () => {
  return (
    <>
      <div className="home__container">
        <div className="home__container-info">
          <h2 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h2>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className="submit__gmail">
            <input type="text" placeholder="Your Email Address" />
            <button>Get Started</button>
          </div>
          <div className="people__use">
            <div className="img-wrapper">
              <img src={people} alt="" />
            </div>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="home__container-img">
          <img src={ai} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
