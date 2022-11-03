import React from 'react';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Footer from '../components/Footer';
function Root(props) {
  return (
    <div>
      <Intro></Intro>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default Root;
