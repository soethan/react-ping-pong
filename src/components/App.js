import React from 'react';
import { connect } from 'react-redux';
import { ping, pong } from '../actions';

const styles = {
  ping: {
    color: '#0f0'
  },
  pong: {
    color: '#00f'
  }
};

let App = ({ isPinging, ping, pong }) => (
  <div>
    <h1 style={isPinging ? styles.ping : styles.pong}>{isPinging ? 'PING' : 'PONG'}</h1>
    <button onClick={isPinging ? pong : ping}>Toggle PING and PONG</button>
  </div>
);

App = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping, pong }
)(App);

export default App;
