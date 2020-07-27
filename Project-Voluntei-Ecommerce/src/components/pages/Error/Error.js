import React from 'react';
import './Error.css';

export default () => {
  return (
    <div className="error-page">
      <div className="error-page-container">
        <h1>404</h1>
        <h2>Página não encontrada!</h2>
        <h4>Verifique a url digitada.</h4>
      </div>
    </div>
  );
};
