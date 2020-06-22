import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
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
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../research.png"
              alt="research"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default research;
