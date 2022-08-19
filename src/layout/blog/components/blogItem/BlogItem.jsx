import React from "react";
import blog1 from '../../../../assets/blog01.png'
import './_blogItem.scss'

const BlogItem = ({ width = '100' }) => {
  return (
    <div className={`blogitem__container ${width}`}>
        <div className="item-wrapper">
            <img src={blog1} alt="" />
        </div>
        <div className="blog__main">
            <p className="datetime">Sep 26, 2021</p>
            <h3 className="title">
            GPT-3 and Open AI is the future. Let us exlore how it is?
            </h3>
            <p className="read-full">
            Read Full Article
            </p>
        </div>
    </div>
  );
};

export default BlogItem;
