import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './App/App';

const PageCenter = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppPlacement = () => (
  <PageCenter>
    <App />
  </PageCenter>
);

ReactDOM.render(<AppPlacement />, document.getElementById('root'));
