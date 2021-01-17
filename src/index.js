import React from 'react';
import ReactDOM from 'react-dom';
import indexStyles from './index.css';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <div className={indexStyles.container}>
      <Navbar />
      <Routes />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
