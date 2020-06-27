import React from 'react';

import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';

import SidebarWrapper from '../../components/PageLayout/Sidebar';
import PostCard from '../../components/PostCard';
import SEO from '../../components/Seo';

const Blog = ({ data }) => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="Blog"
        description="Mandy Davis's Medium posts."
        path="blog"
      />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Blog</h1>
        </div>
          <p>Coming soon: all of my two (2) Medium posts will appear here.</p>
        <div className="blogPageText">

        </div>
        {/* <Row gutter={[20, 20]}>
          {
            data.allMarkdownRemark && data.allMarkdownRemark.edges.map((val, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Col key={key} xs={24} sm={24} md={12} lg={8}>
                <PostCard data={val} />
              </Col>
            ))
          }
        </Row> */}
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Blog;


// const blogPageText = {
//     para1: ``,
//     para2: `Coming soon: all of my (2) Medium posts will appear here.`,
//   };

//   const Blog = () => {
//     <Layout className="outerPadding">
//     <Layout className="container"></Layout>
//         <Header />
//     <SidebarWrapper>
//         <div className="marginTopTitle">
//           <h1 className="titleSeparate">Blog</h1>
//         </div>
//       <>
//         <div>
//           <p>
//             {blogPageText.para1}
//           </p>
//           <p>
//             {blogPageText.para2}
//           </p>
//         </div>
//       </SidebarWrapper>
//     </Layout>
//     </>
//   };
//   export default Blog;