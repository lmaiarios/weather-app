import React from 'react';
import Card from './components/Card';
import Search from './components/Search';

function App() {
  let cidades = [
    'New York',
    'Paris',
    'London',
    'Tokyo',
    'Lima',
    'Johannesburg'
  ];

  return (
    <>
      <Search />

      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        {cidades.map(
          (cidade, index) => <Card city={cidade} lang="pt_br" key={index}/>
        )}
      </div>
    </>
  );
}

export default App;