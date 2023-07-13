import React from 'react';
import '../styles/pages.css';

function Education() {
    return (
      <ul className='page-list'>
        <li className='page-list-item'>
          <h1>Computer Science</h1>
          <h2>Alura: 2021-2022</h2>
          <p>
          By using the online resources provided by Alura, I acquired valuable skills and knowledge in 
          computer science. Specifically, I gained proficiency in programming languages such as Python, 
          JavaScript, Kotlin, and SQL. Additionally, I learned the intricacies of designing APIs and 
          executing database queries, enabling me to effectively interact with databases.
          </p>
          <h2>Self-teaching: ongoing</h2>
          <p>
          During my recent professional experience, I maintained an active pursuit of acquiring 
          new skills and knowledge. As a part of this self-directed learning process, I delved 
          into the essentials of Java, Data Structures, Algorithms, and Design Patterns. Moreover, 
          I honed my capabilities in software design and analysis, while also delving into the practices 
          of extreme programming (XP), including Test-Driven Development (TDD), clean code principles, 
          as well as SOLID and DRY principles.
          </p>
        </li>
        <li className='page-list-item'>
          <h1>Biotechnology</h1>
          <h2>University of Nottingham, PhD: 2015-2019</h2>
          <p>
          Learning the principles and techniques involved in designing and engineering proteins, including rational design, directed evolution, and computational modeling.
          Molecular biology techniques such as DNA cloning, PCR, site-directed mutagenesis, gene expression, and protein purification.
          Protein characterization to analyze and characterize proteins using various techniques, including SDS-PAGE, enzyme assays and spectroscopy (UV-Vis, fluorescence).
          Enzyme kinetics and designing enzyme assays to evaluate protein function, substrate specificity, and catalytic activity.
          </p>
          <p>
          Computational tools and software for protein sequence analysis, homology modeling, molecular docking, and molecular dynamics simulations.
          Bioinformatics and data analysis: Students acquire skills in analyzing and interpreting large-scale biological datasets, including structural data, using bioinformatics tools and statistical analysis methods.
          </p>
          <p>
          Developing strong communication skills through presenting research findings at conferences, writing scientific papers, and effectively communicating their work to both technical and non-technical audiences.
          Engagement in collaborative research projects, working within multidisciplinary teams, and developing skills in effectively collaborating with other researchers and scientists.
          </p>
        </li>
      </ul>
    )
}

export default Education;
