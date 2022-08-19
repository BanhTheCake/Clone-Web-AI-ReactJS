import React from 'react';
import BlogItem from './components/blogItem/BlogItem';
import './_blog.scss';

const Blog = () => {
    return (
        <div className="blog__container">
            <h2 className="blog__title gradient__text">
                A lot is happening, We are blogging about it.
            </h2>
            <div className="blog__list">
                <div className="blog__first">
                    <BlogItem />
                </div>
                <div className="blog__primary">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem/>
                    <BlogItem />
                </div>
            </div>
        </div>
    );
};

export default Blog;
