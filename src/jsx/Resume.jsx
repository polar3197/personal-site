// src/pages/Resume.jsx
import React from 'react';
import '../css/Page.css'
import resumePdf from '../../assets/pdfs/Charlie-Cooper-Resume.pdf';

const Resume_pdf = ({ pdf }) => {
  return (
    <object 
      data={`${pdf}#toolbar=0&navpanes=0`}
      type="application/pdf"
      width="100%" 
      height="800px"
      style={{ border: 'none' }}
    >
      <p>Unable to display PDF. <a href={pdf} download>Download instead</a></p>
    </object>
  );
};

const Resume = () => {
  return (
    <>
    <div className="Header">
        Resume
    </div>
    <div className="Page-Content-inner">
        <Resume_pdf pdf={resumePdf} />
    </div>
    </>
  );
};

export default Resume;