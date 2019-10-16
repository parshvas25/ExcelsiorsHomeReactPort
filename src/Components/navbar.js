import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import logo from '../images/logo.png';
import React from 'react';
import '../App.css';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        style={{ backgroundColor:  }}
      >
        <img className='navlogo' src={logo} alt='Logo'></img>
        <div className='navbartitle'>
          <h4>Brampton Excelsiors</h4>
        </div>
      </Navbar>
    );
  }
}

export default NavBar;
