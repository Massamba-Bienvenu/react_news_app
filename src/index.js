import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// IMPORT COMPONENTS
import Routes from './Routes';


const App = () => {
  return ( 
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
   );
}

ReactDOM.render(<App />,document.getElementById('root'));
