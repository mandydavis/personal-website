import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import SEO from '../components/Seo';

export default class Resume extends Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <SEO
          title="Resume"
          description="My resume consists of a list of relevant academic, professional, research, and leadership experiences."
          path="resume"
        />
        <Document
          file="../Mandy Davis Resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        {/* <Row justify="center" style={{ background: 'lightslategray' }}>
          <Col span={2}>
            <p>{`Page ${pageNumber} of ${numPages}`}</p>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={pageToggle}>
              {pageNumber === 1 ? 'Next Page' : 'Previous Page'}
            </Button>
          </Col>
        </Row> */}
      </div>
    );
  }
}
