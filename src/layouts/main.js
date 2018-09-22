import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../colors'

const Center = ({ children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh'
  }}>
    {children}
  </div>
)

export default function Main({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100vw',
        height: '100vw',
        backgroundColor: 'white'
      }}>
    <Center>{children}</Center>
    <div 
      style={{
        width: '100vw',
        height: '50vh',
        backgroundColor: color
      }}
    />
  </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired
};
