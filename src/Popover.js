import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import './index.css';


export default class Popo extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          {this.props.totalLike} films
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Derniers films ajoutés</PopoverHeader>
          <PopoverBody>{this.props.lastLike}</PopoverBody>
        </Popover>
      </div>
    );
  }
}