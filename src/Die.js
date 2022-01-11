import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { numberWords, locked, val, disabled, isRolling } = this.props;

    const classes = `Die fas fa-dice-${numberWords[val - 1]} 
    fa-4x ${locked && 'Die-locked'} ${isRolling && !locked && 'Die-rolling'}`;

    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled}></i>
    );
  }
}

export default Die;
