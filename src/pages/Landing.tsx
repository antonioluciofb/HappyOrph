import React from 'react';

import '../styles/pages/landing.css'

import logo from "../images/Logo.svg"

import { FiArrowRight } from "react-icons/all"


function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt=""/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Vitoria</strong>
          <span>Espirito Santo</span>
        </div>

        <a href="a" className="enter-app"> <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>  </a>

      </div>
    </div>
  );
}

export default Landing