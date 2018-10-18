import React, { Component } from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
// STYLESHEETS
import './index.css'; 
import Popo from './Popover.js';
import App from './App.js';
import Movies from './Movies.js';



class Navbar extends Component {
    constructor(props) {
      super(props);;
  
      this.toggle = this.toggle.bind(this);
      this.handleClickLikeOn = this.handleClickLikeOn.bind(this);
      this.handleClickLikeOff = this.handleClickLikeOff.bind(this);
      this.myMoviesDisplay = this.myMoviesDisplay.bind(this);
      this.myMoviesDisplay2 = this.myMoviesDisplay2.bind(this);
      this.state = {
        dropdownOpen: false,
        viewOnlyLike: false
      };

    }
  
    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    handleClickLikeOn () {
      this.setState({
        viewOnlyLike: true
      });
      console.log("ON A CLIQUE");
      }

      handleClickLikeOff () {
        this.setState({
          viewOnlyLike: false
        })
      };

      myMoviesDisplay () {
        this.props.sendData();
      }

      myMoviesDisplay2 () {
        this.props.sendData2();
      }
  
    render() {
    var newArray = ["Film 1", "Film 2", "Film 3", "Film 4"];
    var moviesCount = newArray.length;
    var moviesLast = "";
    if (newArray === []) {
        moviesLast = "Aucun film sélectionné"
    }
    else {
        moviesLast = newArray[0] + "," + newArray[1] + "," + newArray[2]
    }
  
      return (
        <div>
          <Nav pills className="firstNavbar">
            <NavItem className="navIt">
              <div id="movieLogo" className="rotating"><img src="images/logo.png" /></div>
            </NavItem>
            <NavItem className="navIt">
              <NavLink href="#" onClick={this.myMoviesDisplay2}>Last Releases</NavLink>
            </NavItem>
            <NavItem className="navIt">
              <NavLink href="#" onClick={this.myMoviesDisplay}>My Movies</NavLink>
            </NavItem>
            {/* <NavItem className="navIt">
              <Popo totalLike = {moviesCount} lastLike= {moviesLast} />
            </NavItem> */}
          </Nav>
        </div>
      );
    }
  }

export default Navbar;
