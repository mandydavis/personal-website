import React from 'react';

const blogPageText = {
    para1: ``,
    para2: `Coming soon: all of my (2) Medium posts will appear here.`,
  };

  const Blog = () => {
    const description = `Mandy's Medium posts`;
    return (
      <>
        <div>
          <h1 className="titleSeparate">Blog</h1>
          <p>
            {blogPageText.para1}
          </p>
          <p>
            {blogPageText.para2}
          </p>
        </div>
      </>
    );
  };
  export default Blog;