import React from 'react';
import '../styles/pages.css';

function Experiences() {
  return (
    <ul className='page-list'>
      <li className='page-list-item'>
        <h1>Software Engineer I</h1>
        <h2>Inventa Ltda, 2022-2023</h2>
        <p>
        As a software engineer on the ERP team, my primary responsibilities revolved around developing 
        a fresh ERP API. I utilized Kotlin, Spring Boot, and AWS for this purpose. Throughout this role,
        I gained expertise in configuring AWS backend services such as SQS, SNS, S3, Cognito, and 
        Secrets Manager. Additionally, I became proficient in updating these services using terraform. 
        Furthermore, I acquired knowledge in leveraging the Spring Boot Framework, including its key 
        annotations, to create APIs, controllers, and DB repositories. The management of the repositories 
        was handled by JPA-Hibernate and Flyway.
        </p>
      </li>
      <li className='page-list-item'>
        <h1>PhD Candidate</h1>
        <h2>University of Nottingham, 2015-2019</h2>
        <p>
        My research focuses on the engineering of artificial metalloenzymes with the goal of producing 
        transfer hydrogenases. The objective is to develop these transfer hydrogenases to enable the 
        recycling of nicotinamide cofactors. This involves designing and modifying metalloenzymes to 
        facilitate the transfer of hydrogen, thus allowing for the regeneration and efficient utilization 
        of nicotinamide cofactors in biocatalytic reactions. By leveraging the principles of protein 
        engineering and metal coordination chemistry, I aim to create novel biocatalytic systems that 
        have the potential to revolutionize the field of enzymatic cofactor recycling.
        </p>
      </li>
    </ul>
  )
}

export default Experiences
