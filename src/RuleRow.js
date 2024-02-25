import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
  render() {
    const isDisabled = (a, b) => (this.props.score === undefined ? a : b);

    return (
      <tr
        className={`RuleRow  RuleRow-${isDisabled('active', 'disabled')}`}
        onClick={isDisabled(this.props.doScore, null)}
      >
          <td className="RuleRow-name"><span className='tooltip'><span className='tooltiptext'>{this.props.description}</span>{this.props.name}</span></td>
          <td className="RuleRow-score">
            {isDisabled(this.props.points, this.props.score)}
          </td>
      </tr>
    );
  }
}

export default RuleRow;
