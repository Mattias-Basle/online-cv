import React from 'react';
import '../../App.css';
import '../styles/pages.css';
import Cards from '../Cards';
import france from '../../images/flags/france.png';
import brazil from '../../images/flags/brazil.png';
import spain from '../../images/flags/spain.png';
import uk from '../../images/flags/united-kingdom.png';

function AboutMe() {
  const GitHub = "https://github.com/Mattias-Basle?tab=repositories";
  return (
    <ul className='page-list'>
      <li className='page-list-item'>
        <h1>Presentation</h1>
        <p>
          After years of dedication to the field of biotechnology, including the successful 
          completion of a PhD, I embarked on an extraordinary journey to explore the realm of 
          software engineering. Today, with one year of invaluable experience in this new area, 
          I am ready to contribute my unique blend of expertise and passion.
        </p>
        <p>
          As a result of this career shift, I bring to the table a distinct advantage—a deep understanding 
          of both biotechnology and software engineering. My PhD in biotechnology equips me with a comprehensive 
          knowledge of molecular biology, genetic engineering, and bioinformatics. This scientific foundation, 
          coupled with my year of experience in software engineering, empowers me to bridge the gap between 
          complex biological systems and cutting-edge software solutions.
        </p>
        <p>
          My aptitude for problem-solving, attention to detail, and dedication to excellence have been pivotal 
          in my successful transition into software engineering. I possess strong analytical and critical 
          thinking skills, which, when combined with my interdisciplinary background, enable me to approach 
          complex problems from multiple perspectives and devise innovative solutions.
        </p>
        <p>
          In conclusion, my journey from a PhD in biotechnology to a software engineer has equipped me with 
          a rare blend of expertise that is poised to make a significant impact.This career shift has equipped 
          me with a deep understanding of both fields and a passion for driving innovation at 
          their intersection. I am ready to contribute my diverse skill set, problem-solving abilities, 
          and dedication to excellence to your organization.
        </p>
      </li>
      <li className='page-list-item'>
        <h1>Skillset</h1>
        <p><b><i><u>Programming languages:</u></i></b> Java, Python, Kotlin, JavaScript </p>
        <p><b><i><u>Frameworks:</u></i></b> SpringBoot, NodeJs, React, Chalice, Django </p>
        <p><b><i><u>DevOps:</u></i></b> Docker, Kubernetes </p>
        <p><b><i><u>Cloud:</u></i></b> AWS </p>
      </li>
      <li className='page-list-item'>
        <h1>Languages</h1>
        <p><img src={france} alt='French Flag' className='flags'/> French: Native </p>
        <p><img src={uk} alt='UK Flag' className='flags'/> English: Fluent</p>
        <p><img src={brazil} alt='Brazilian Flag' className='flags'/> Brazilian: Fluent</p>
        <p><img src={spain} alt='Spanish Flag' className='flags'/> Spanish: Basic</p>
      </li>
      <li className='page-list-item'>
        <h1>Hobbies</h1>
        <Cards />
      </li>
      <li className='page-list-item'>
        <h1>Projects</h1>
        <p>
          All my projects, either ongoing or completed, can be found in my <a 
          href={GitHub} 
          target='_blank'
          rel="noreferrer">GitHub
          </a>. Feel free to look it up, but here below are some overviews.
        </p>
        <h2>DSA</h2>
        <p>
          This ongoing project is coded in both Java and Kotlin. The aim here is to 
          post the progession of my learnings as I go through various CS topics to
          improve my foundation knowledge as a software engineer.
        </p>
        <h2>Forum</h2>
        <p>
          This ongoing project stack is Kotlin/SpringBoot. Here the objective is to create
          the full backend structure of a forum, including a layer for database communication.
        </p>
        <h2>Blog</h2>
        <p>
          The first completed (although there's always room for improvement) project. Using NodeJs,
          a blog has been constructed where people can read and write blog posts (local version only).
        </p>
      </li>
    </ul>
  )
}

export default AboutMe
