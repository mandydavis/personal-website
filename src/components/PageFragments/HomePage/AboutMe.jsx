import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: ``,
  paraTwo: `Hello there! My name is Mandy Davis. I'm a rising senior at Northwestern University. 
  I'm majoring in <b>Psychology</b>, with an adjunct major in <b>Science in Human Culture</b> and 
  a minor in <b>Computer Science</b>. Academically speaking, I'm currently most passionate about
  understanding the <a href="https://mandydavis.github.io/ict-gep-re-analysis/">ICT Gender-Equality Paradox</a>. Outside of classes and research, my main hobby is running.`,
};
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Mandy', 'Davis', 'Amanda', 'cross country', 'runner', 'running', 'Northwestern', 'research']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="cactus.png"
            height={60}
            alt="location image"
            textH4="Born and raised in"
            textH3="Phoenix, Arizona"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="gocats.png"
            alt="Northwestern University mascot"
            textH4="Go 'cats"
            textH3="Forever and Always"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="running_shoe.png"
            alt="running shoe"
            textH4="Division I"
            textH3="Cross Country Runner"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="mountain.png"
            alt="mountain image"
            textH4="Obsessed with"
            textH3="Mountains"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="data.png"
            alt="data image"
            textH4="Also obsessed with"
            textH3="Data"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="research.png"
            alt="research microscope"
            textH4="Passionate about"
            textH3="Research"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
