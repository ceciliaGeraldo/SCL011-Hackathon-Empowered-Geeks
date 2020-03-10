import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>ViPago</h2>
        <li>
          <Link to="/photo">Regístrate</Link>
        </li>
        <li>
          <Link to="/camera">Iniciar Sesión</Link>
        </li>
      </div>
    );
  }
}