import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/PageLayout/Header';

import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';


const Blog = () => (
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
            <blockquote className="embedly-card" data-card-controls="0"><h4><a href="https://medium.com/@amandadavis2021/running-a-100-mile-race-free-bleeding-c251783d63d8">Period practicality: lessons from a 100-mile race finisher</a></h4><p>At her 9-to-5 day job, Ladia Albertson-Junkans is a programmer and analyst working with a research team on a mission to abate the opioid epidemic. When Ladia isn't working to solve public health crises, she runs - a lot. During a peak training cycle, she'll rack up between fifty to seventy miles of running per week.</p></blockquote>
                <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>  
            <blockquote className="embedly-card" data-card-controls="0"><h4><a href="https://medium.com/swlh/algorithms-have-gender-schemas-too-38d0dd244cd0">Algorithms have gender schemas too</a></h4><p>Read the riddle below, and if you haven't heard it before, try to solve it. A father and his son are out driving and are involved in a terrible accident. The father is killed instantly, and the son is in critical condition.</p></blockquote>
                <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>   
            <blockquote className="embedly-card" data-card-controls="0"><h4><a href="https://medium.com/@amandadavis2021/from-google-form-to-automatic-newsletter-with-google-apps-script-ac3402939c08">From Google Form to Automatic Newsletter with Google Apps Script</a></h4><p>When my collegiate cross country team was suddenly spread out across the country due to the Coronavirus pandemic, we wanted a fun way to keep up with what everyone was up to week-to-week. Gathering responses from a Google Form was easy, but shaping those responses into an aesthetically pleasing newsletter required a lot of copy and pasting, highlighting, clicking, and repeating.</p></blockquote>
                <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
        </div>
    
        {/* <div className="blogPageText">
          
        </div> */}

      </SidebarWrapper>
    </Layout>
  </Layout>
  
);

// Blog.propTypes = {
//   data: PropTypes.shape({
//     allMediumPost: PropTypes.shape({
//       edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
//     }).isRequired,
//   }).isRequired,
// };


// export const query = graphql` {
//   allMediumPost(sort: { fields: [createdAt], order: DESC }) {
//     edges {
//       node {
//         id
//         title
//         virtuals {
//           subtitle
//           previewImage {
//             imageId
//           }
//         }
//         author {
//           name
//         }
//       }
//     }
//   }
// }
// `;

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
