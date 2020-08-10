import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';

const research = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Research"
        description="I love research very much. Here's an overview of the research experiences I've had so far."
        path="/research"
        keywords={['Mandy', 'Davis', 'Chicago', 'Evanston', 'research', 'Northwestern', 'ICT', 'Gender']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Research</h1>
        </div>
        <div className="researchTile">
          <h3>Circumnavigator's Travel-Study Grant 🌍</h3>
          <p>
            Awarded $10,000 to conduct a global research project on the ICT Gender-Equality Paradox.
          </p>
          <p>
            Though my trip has been postponed to due to the Coronavirus pandemic, I will be traveling to
            {' '}
            <strong>Morocco</strong>
            {' '}
            🇲🇦, the
            {' '}
            <strong>UK</strong>
            {' '}
            🇬🇧,
            {' '}
            <strong>France</strong>
            {' '}
            🇫🇷,
            {' '}
            <strong>Estonia</strong>
            {' '}
            🇪🇪,
            {' '}
            <strong>Qatar</strong>
            {' '}
            🇶🇦,
            {' '}
            <strong>Singapore</strong>
            {' '}
            🇸🇬, and
            {' '}
            <strong>New Zealand</strong>
            {' '}
            🇳🇿 to conduct a
            {' '}
            <i>comparative case studies</i>
            {' '}
            interview and ethnography based
            research project about women in tech.
          </p>
          <p>
            <strong>See more</strong>
            : You can read my accepted proposal
            {' '}
            <a href="../Cicumnavigators Proposal.pdf" target="_blank">here</a>
            .
            Read more about my project on the Chicago Circumnavigators Club
            {' '}
            <a href="http://www.chicagocircumnavigators.org/Scholar2020MandyDavis.html" target="_blank" rel="noreferrer">website</a>
            .
            Lastly, check out my
            {' '}
            <a href="https://mandydavis.github.io/ict-gep-re-analysis/" target="_blank" rel="noreferrer">re-analysis of the ICT Gender-Equality Paradox</a>
            .
          </p>
        </div>
        <div className="researchTile">
          <h3>Social Media Lab 📱</h3>
          <p>
            I started working as a research assistant in the SML the summer after my freshman year
            and am forever grateful for the amazing people who introduced me to the world of
            research. I learned (and continue to learn) about the value of qualitative research
            and how to apply that methodology. I am trained in
            {' '}
            <strong>constructivist grounded theory qualitative coding</strong>
            {' '}
            and applied those skills to a project about transgender
            users of dating apps.
          </p>

          <p>
            Currently, my work for the SML involves helping a PhD candidate finish her dissertation on
            {' '}
            <strong>algorithmic folk theories</strong>
            . In short, folk theories are theories
            that users have surrounding how a platform's algorithms work (e.g., the Facebook
            news feed or Instagram explore feature algorithms).
          </p>
          <p>
            <strong>See more</strong>
            : Read the published paper from the transgender users of dating apps project:
            {' '}
            <a href="https://socialmedia.northwestern.edu/wp-content/uploads/2019/11/CSCW_2019_JRFJB.pdf" rel="noreferrer" target="_blank">
              ’I Don’t Want Them to Not Know’: Investigating
              Decisions to Disclose Transgender Identity on Dating Platforms
            </a>
          </p>
        </div>
        <div className="researchTile">
          <h3>Independent research project: Female Initiator Requirements in Dating Apps 👩‍❤️‍👨</h3>
          <p>
            With the guidance of Professor Jeremy Birnholtz, PhD, the rest of the Social Media Lab, and the generous monetary support
            of Northwestern's Office of Undergraduate Research, I was fortunate to have my first independent research experience as a sophomore.
            Using Qualtrics and Mechanical Turk, I conducted an online experiment to investigate the role that a female initiator Requirement
            (e.g., Bumble) plays in perceptions of users'
            {' '}
            <i>dominance</i>
            {' '}
            and
            {' '}
            <i>affiliation</i>
            . I analyzed my results in R and presented about
            this project at Northwestern's 2019 Undergraduate Research Expo.
          </p>
          <p>
            <strong>See more</strong>
            : Read my
            {' '}
            <a href="../Female Initiator Requirements.pdf" rel="noreferrer" target="_blank">final paper</a>
            .
          </p>
        </div>
        <div className="researchTile">
          <h3>Winfred Hill Award for best final paper in Research Methods in Psychology 🏆</h3>
          <p>
            I was co-awarded the
            {' '}
            <strong>
              Winfred Hill Award for best final paper in Research
              Methods in Psychology
            </strong>
            {' '}
            out of all Northwestern students
            who took Research Methods in Psychology during the 2018-2019 school year.
          </p>
          <p>
            <strong>See more</strong>
            : Though this was unofficial research and deviates from
            my normal research interests, this
            <a href="../NU Student Athletes.pdf" target="_blank" rel="noreferrer">paper</a>
            exemplifies my research and writing style.
          </p>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default research;

// const Research = () => {
//   // const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
//   return (
//     <>
//       <div>
//         <SEO
//           title="About"
//           path=""
//           keywords={['Mandy', 'Davis', 'Amanda', 'cross country',
// 'runner', 'running', 'Northwestern', 'research']}
//         />
//         <h1 className="titleSeparate">Research</h1>
//         <p>
//           text goes here
//         </p>
//         <p>more text here</p>
//       </div>
//       <Row gutter={[20, 20]}>
//         <Col xs={24} sm={24} md={12} lg={8}>
//           <ResearchTile
//             img="cactus.png"
//             height={60}
//             alt="location image"
//             textH4="Born and raised in"
//             textH3="Phoenix, Arizona"
//           />
//         </Col>
//         <Col xs={24} sm={24} md={12} lg={8}>
//           <ResearchTile
//             img="gocats.png"
//             alt="Northwestern University mascot"
//             textH4="Go 'cats"
//             textH3="Forever and Always"
//           />
//         </Col>
//         <Col xs={24} sm={24} md={12} lg={8}>
//           <ResearchTile
//             img="running_shoe.png"
//             alt="running shoe"
//             textH4="Division I"
//             textH3="Cross Country Runner"
//           />
//         </Col>
//         <Col xs={24} sm={24} md={12} lg={8}>
//           <ResearchTile
//             img="mountain.png"
//             alt="mountain image"
//             textH4="Obsessed with"
//             textH3="Mountains"
//           />
//         </Col>
//       </Row>
//     </>
//   );
// };
// export default Research;
