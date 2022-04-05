import React from 'react';

const Blogs = () => {
    return (
        <div className='blogs pd'>
            <h2>Question: 1. What is context API?</h2>
            <h3>Answer: Context api is a global variable that can pass data to all child item. It is the alternative way of prop Drilling. With context api we can send data from grand parent to grand child item with out the help of parent item. Which is very helpful and effective.</h3>
            <hr />
            <h2>Question:2. What is semantic Tag?</h2>
            <h3>Answer: Semantic tag is a tag which is describe the type of content inside that element. It helps in SEO. By using semantic tag we can easily understand the purpose of the element.Example of some Semantic Tag is "article", "header","footer","main",etc</h3>
        </div>
    );
};

export default Blogs;