import React from 'react';
import {
  Affix, Layout, Row, Col,
} from 'antd';
import FA from 'react-fontawesome';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const { Content } = Layout;
const {
  github, linkedin, medium, instagram, 
} = Config.social;

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          Mandy
          {' '}
          <span>Davis</span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>Northwestern University</div>
      <div className="centerAlign box">
        <a href={github} target="_blank" label="button" rel="noopener noreferrer"><FA name="github" /></a>
        <a href={linkedin} target="_blank" label="button" rel="noopener noreferrer"><FA name="linkedin" /></a>
        <a href={medium} target="_blank" label="button" rel="noopener noreferrer"><FA name="medium" /></a>
        <a href={instagram} target="_blank" label="button" rel="noopener noreferrer"><FA name="instagram" /></a>
      </div>
      <ul className={`box ${style.badge} contactBlock`}>
        {/* <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="calendar" />
            {' '}
          </span>
&nbsp; &nbsp; August 3, 1999
        </li> */}
        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="map-pin" /></span>
          {' '}
&nbsp; &nbsp;Seeking Remote Job
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="mail" /></span>
{/* &nbsp; &nbsp; 
          <a
            href="mailto:amandadavis2021@u.northwestern.edu"
            target="_top"
          >
            <span className={style.emailHider}>@</span>
          </a> */}
&nbsp; &nbsp;
<li>
  mandydavi3 [at] gmail [dot] com
</li>
&nbsp; &nbsp;
        </li>
        {/* <li className={`${style.copyrightCite}`}>
          <p>Copyright © 2020 Mandy Davis</p>
          <p>Icons from <a href="https://openmoji.org/">OpenMoji</a></p>
        </li> */}
        {' '}
      </ul>
    </div>
    {/* <div className={style.resumeDownload}>
        <a href="../resume.pdf" download target="_blank">Download Resume</a>
    </div> */}
  </aside>
);


const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
