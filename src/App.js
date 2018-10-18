import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';

// BOOTSTRAP
import {Animated} from "react-animated-css";
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap';


// STYLESHEETS
import './index.css'; 

import Navbar from './Navbar.js';
import Movies from './Movies.js';
import Popo from './Popover.js';

class App extends Component {

  constructor(props) {
    super(props);;
    this.handleClickLikeOn = this.handleClickLikeOn.bind(this);
    this.handleClickLikeOff = this.handleClickLikeOff.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.getData = this.getData.bind(this);
    this.state = {
      viewOnlyLike: false,
      moviesCount: 0,
      moviesNameList: []
    };
  }

  handleClickLikeOn () {
    this.setState({
      viewOnlyLike: true,
    });
    console.log("ON A CLIQUE SUR MY MOVIES");
    }

  handleClickLikeOff () {
      this.setState({
        viewOnlyLike: false
      })
      console.log("ON A CLIQUE SUR LAST RELEASES");
    };

  handleClick(status, name) {
    var moviesNameListCopy = [...this.state.moviesNameList];
    moviesNameListCopy.push(name);
      if (status == false) {
      this.setState({
        moviesCount: this.state.moviesCount +1,
        moviesNameList : moviesNameListCopy
      })}
      else {
        this.setState({
          moviesCount: this.state.moviesCount -1
        })
      }
    }

  //   getData(val){
  //     // do not forget to bind getData in constructor
  //     console.log(val);
  // }
  
  render() {
      var movieData = [{image: "images/WOTN.jpg",
      name:"We Own The Night",
      description: "New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit. New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit."
    },
    {image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/62iZpzHnm2fTUGFZ2N5fP5END30.jpg",
      name:"Drive",
      description: "New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit. New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit."
    },
    {image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/k8LxrSomWzf1dV1YdLadMiDsBZD.jpg",
      name:"The Departed",
      description: "New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit. New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit."
    },
    {image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uNhz24wyHxTpeJTU0UvCiEex3OI.jpg",
      name:"Goodfellas",
      description: "New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit. New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit."
    },
    {image: "images/WOTN.jpg",
      name:"We Own The Night",
      description: "New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit."
    },
    {image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/62iZpzHnm2fTUGFZ2N5fP5END30.jpg",
      name:"Drive",
      description: "New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit. "
    },
    {image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/k8LxrSomWzf1dV1YdLadMiDsBZD.jpg",
      name:"The Departed",
      description: "New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit."
    },
    {image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uNhz24wyHxTpeJTU0UvCiEex3OI.jpg",
      name:"Goodfellas",
      description: "New York, fin des années 80. Bobby est le jeune patron d'une boite de nuit branchée appartenant aux Russes. Avec l'explosion du trafic de drogue, la mafia russe étend son influence sur le monde de la nuit."
    }
  
  ];
  var handleClick = this.handleClick;
  var displayOnlyLike = this.state.viewOnlyLike;
  var movieList = movieData.map(function(prop, i) {
      return <Movies movieImage={prop.image}
      movieName={prop.name}
      movieDescription={prop.description}
      viewOnlyLike={displayOnlyLike}
      handleClickParent={handleClick}/>;
    })

    var moviesNameListCopy = [...this.state.moviesNameList];
    var moviesDisplay = "";
    // if (moviesNameListCopy.length < 4) {
    //   moviesDisplay = moviesNameListCopy
    // }
    // else {
    //   moviesDisplay = moviesNameListCopy.slice(Math.max(moviesNameListCopy.length - 3, 1))
    // }
    if (moviesNameListCopy.length > 0) {
      moviesDisplay = moviesNameListCopy.pop();
    }
    if (moviesNameListCopy.length > 0) {
      moviesDisplay =  moviesDisplay + ', ' + moviesNameListCopy.pop();
    }
    if (moviesNameListCopy.length > 0) {
      moviesDisplay =  moviesDisplay + ', ' + moviesNameListCopy.pop();
    }
    if (moviesNameListCopy.length > 0) {
      moviesDisplay = moviesDisplay + ' ...'
    }


    return (
      <div className="App">
        <Container>
        <Animated animationIn="fadeInDown" isVisible={true}>
            <Navbar sendData={this.handleClickLikeOn} sendData2={this.handleClickLikeOff} />
            <div style={{color: 'white'}}>{this.state.moviesCount} films likés</div>
            <div style={{color: 'white'}}>Les derniers films : {moviesDisplay}</div>
            {/* <Button onClick={this.handleClickLikeOn}>Show my movies</Button>
            <Button onClick={this.handleClickLikeOff}>Show last releases</Button> */}
            </Animated>
          </Container>
          <Container>
          <Animated animationIn="bounceInLeft" isVisible={true}>
            <Row>
            {movieList}
            {/* {console.log(this.state.moviesCountBooloan)} */}
            </Row>
            </Animated>
          </Container>
      </div>
    );
  }
}

export default App;