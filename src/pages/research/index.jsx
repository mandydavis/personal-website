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
          <h3>[Senior Thesis] The History of a Graph: The STEM Gender-Equality Paradox and the People who Made it 📈</h3>
          <p>
          Written under the direction of Prof. Sepehr Vakil (SESP), this closely analyzed thesis exposes the faulty assumptions behind the “gender-equality paradox” in STEM/ICT education, which purports to find that more gender-equal countries have relatively fewer female students graduating in STEM/ICT fields than do countries with less gender equality.  Using a mix of historical, ethnographic, and statistical techniques, the thesis situates the paradox in its social and political context, documenting its analytic and intellectual limits, and then uses IRB-approved interviews with Moroccan women who are pursuing a bachelor's degree in computer science to show how poorly the paradox matches their experiences.
          </p>
          <p>
            <strong>See more</strong>
            : Read the <a href="https://drive.google.com/file/d/1Qyo37b6dKDefjOCooo9151Kz594qOjyk/view?usp=sharing" rel="noreferrer" target="_blank">full thesis</a>.
            See the announcement for my thesis being a co-winner of the <a href="https://shc.northwestern.edu/undergraduate/prize-winners.html" rel="noreferrer" target="_blank">2021 Science in Human Culture Essay Prize</a>.
            {' '}
          </p>
        </div>
        <div className="researchTile">
          <h3>2020 Circumnavigator's Travel-Study Grant 🌍</h3>
          <p>
            Awarded $9,500 to conduct a global research project on the ICT Gender-Equality Paradox.
          </p>
          <p>
            Though the trip was cancelled indefinitely due to the Coronavirus pandemic, I was awarded the chance to visit
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
          <h3>Safe at Home? Investigating police invasions of Chicago homes in the aftermath of Breonna Taylor’s killing.</h3>
          <p>
            I worked on this project along with two others for Jennie Rogers' Fall 2020 Data Science seminar, for delivery to 
            <a href="https://invisible.institute/" target="_blank" rel="noreferrer"> The Invisible Institute</a>. To answer the question of if Chicagoans are safe at home, we used relational analytics,
            data visualization, interactive visualization, machine learning, and natural language processing. As a direct outcome of our project,
            The public Chicago Police Department database now includes data about warrants involved in allegations of misconduct.
          </p>
          <p>
            <strong>See more</strong>
            : See our <a href="https://github.com/Northwestern-Data-Sci-Seminar/Invisible-Institute-Chicago-Reporter-Collaboration-Public/tree/master/The%20Storm%20Panthers" rel="noreferrer" target="_blank"> GitHub repository</a> and <a href="https://docs.google.com/presentation/d/17WM1lXNKKy4280SFajgcNl6E1scE2qAIO-u8cxKEIxk/edit?usp=sharing" rel="noreferrer" target="_blank">final presentation</a>.
          </p>
        </div>
        <div className="researchTile">
          <h3>Northwestern Social Media Lab 📱</h3>
          <p>
            I started working as a research assistant in the SML the summer after my freshman year
            and am forever grateful for the amazing people who introduced me to the world of
            research. I am trained in
            {' '}
            <strong>constructivist grounded theory qualitative coding</strong>
            {' '}
            and applied those skills to a project about transgender
            users of dating apps. I worked on other projects with the SML, such as classifying audience-reaching strategies on Facebook and
            serving as project manager of the final stages of a PhD candidate’s dissertation work on algorithmic folk theories.
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
            my normal research interests, this <a href="../NU Student Athletes.pdf" target="_blank" rel="noreferrer">paper</a> exemplifies my research and writing style.
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
