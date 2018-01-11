import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
            <a href="/home"><img src="/images/cmp-logo.jpg" alt="logo" /></a>
        </header>
        <nav className="nav-bar">
          <ul>
            <li><NavLink to={{pathname: "/home"}}>HOME</NavLink></li>
            <li><NavLink to={{pathname: "/about"}}>ABOUT</NavLink></li>
            <li><NavLink to={{pathname: "/life"}}>LIFE</NavLink></li>
            <li><NavLink to={{pathname: "/wellness"}}>WELLNESS</NavLink></li>
            <li><NavLink to={{pathname: "/career"}}>CAREER</NavLink></li>
            <li><NavLink to={{pathname: "/activism"}}>ACTIVISM</NavLink></li>
            <li><NavLink to={{pathname: "/beauty"}}>BEAUTY</NavLink></li>
            <li><NavLink to={{pathname: "/essays"}}>ESSAYS</NavLink></li>
            <li><NavLink to={{pathname: "/archive"}}>ARCHIVE</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header
