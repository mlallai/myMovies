import React, { Component } from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

// STYLESHEETS
import './index.css'; 
import './App.css';


class Movies extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state={
      bgColor: 'black',
      like: false
    }
  }
  handleClick () {
    this.setState({
      like: !this.state.like,
    });
    this.props.handleClickParent(this.state.like, this.props.movieName)
  }
  

    render() {

    var isDisplay;
    if(this.props.viewOnlyLike == true && this.state.like == false){
      isDisplay = {
        display : "none"
      }
    }

      return (
              <Col xs="12" sm="6" md="3" className="movieCardContainer" style={isDisplay}>
              <div className="movieCard">
                <img className="movieImage" src={this.props.movieImage} />
                <div className="icon" ><FontAwesomeIcon icon={faHeart} onClick={this.handleClick} style={{color:this.state.bgColor}} /></div>
                <h1>{this.props.movieName}</h1>
                <p>{this.props.movieDescription}</p>
                </div>
              </Col>

   
      );
    }
  }


export default Movies;
