import React from 'react';
import Header from '../components/Header.jsx'
import Cards from '../components/Cards.jsx'


function Home ({cities, onClose, onSearch}) {
  return (
    <>
      <Header onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </>
    
  );
};

export default Home;

