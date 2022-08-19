import React, { useState } from 'react';
import './_navbar.scss';
import { AiOutlineMenuFold } from 'react-icons/ai'
import logo from '../../../../assets/logo.svg';

const Navbar = () => {

  const [show, setShow] = useState(false)

    return (
        <div className="header__navbar">
            <div className="img-wrapper">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <div className="link-list">
                    <a href="#">Home</a>
                    <a href="#">What Is GPT3?</a>
                    <a href="#">Open AI</a>
                    <a href="#">Case Studies</a>
                    <a href="#">Library</a>
                </div>
                <div className="auth">
                    <p className="sign-in">Sign In</p>
                    <button className="sign-up">Sign Up</button>
                </div>
                <div onClick={() => setShow(!show)} className="link-list-button--moblie">
                  <AiOutlineMenuFold />
                </div>
                { show ? <>
                  <div className="link-list--mobile scale-up-tr">
                    <a href="#">Home</a>
                    <a href="#">What Is GPT3?</a>
                    <a href="#">Open AI</a>
                    <a href="#">Case Studies</a>
                    <a href="#">Library</a>
                    <div className="auth--mobile">
                      <p className="sign-in--mobile">Sign In</p>
                      <button className="sign-up--mobile">Sign Up</button>
                    </div>
                </div>
                </> : <></>}
            </div>
        </div>
    );
};

export default Navbar;
