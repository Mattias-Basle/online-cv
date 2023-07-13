import React from 'react';
import '../styles/pages.css';
import pcep from '../../docs/pcep-certificate.pdf';

function Certifications() {
    return (
      <ul className='page-list'>
        <li className='page-list-item'>
          <h1>Python</h1>
          <p>PCEP - Certified Entry-Level Python Programmer</p>
          <p>
          <object data={pcep} type="application/pdf" className='pdf-certificate'><i>Certificate</i></object>
          </p>
        </li>
        <li className='page-list-item'>
          <h1>Java</h1>
          <p>HackerRank Verified Certificate: Java Basic <a 
          href='https://www.hackerrank.com/certificates/432c822bd923' 
          target='_blank' rel="noreferrer"
          ><i>Certificate</i></a>
          </p>
        </li>
      </ul>
      )
}

export default Certifications
