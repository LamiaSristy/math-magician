/* eslint-disable max-len */
import React from 'react';
import homeStyles from '../styles/home.module.css';

const Home = () => (
  <div>
    <h2 className={homeStyles.heading}>What is math!</h2>
    <div>
      <p className={homeStyles.paragraph}>Mathematicians seek and use patterns[8][9] to formulate new conjectures; they resolve the truth or falsity of such by mathematical proof. When mathematical structures are good models of real phenomena, mathematical reasoning can be used to provide insight or predictions about nature. Through the use of abstraction and logic, mathematics developed from counting, calculation, measurement, and the systematic study of the shapes and motions of physical objects. Practical mathematics has been a human activity from as far back as written records exist. The research required to solve mathematical problems can take years or even centuries of sustained inquiry.</p>

      <p className={homeStyles.paragraph}>Rigorous arguments first appeared in Greek mathematics, most notably in Euclids Elements. Since the pioneering work of Giuseppe Peano (1858–1932), David Hilbert (1862–1943), and others on axiomatic systems in the late 19th century, it has become customary to view mathematical research as establishing truth by rigorous deduction from appropriately chosen axioms and definitions. Mathematics developed at a relatively slow pace until the Renaissance, when mathematical innovations interacting with new scientific discoveries led to a rapid increase in the rate of mathematical discovery that has continued to the present day.</p>

      <p className={homeStyles.paragraph}>Mathematics is essential in many fields, including natural science, engineering, medicine, finance, and the social sciences. Applied mathematics has led to entirely new mathematical disciplines, such as statistics and game theory. Mathematicians engage in pure mathematics (mathematics for its own sake) without having any application in mind, but practical applications for what began as pure mathematics are often discovered later.</p>
    </div>
  </div>
);

export default Home;
