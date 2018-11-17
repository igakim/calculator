import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Buttons from '../presentational/Buttons.jsx';
import calculate from '../../utils/calc';

export default class CalcContainer extends React.Component {
  state = {
    display: '',
    isSign: false,
    sign: null,
    firstNumber: '',
    secondNumber: '',
  }

  handleClickClear = () => {
    this.setState({
      display: '',
      isSign: false,
      sign: null,
      firstNumber: '',
      secondNumber: '',
    });
  }

  handleClickNumber = ({ target: { textContent } }) => {
    if (this.state.isSign) {
      this.setState({
        secondNumber: `${this.state.secondNumber}${textContent}`,
        display: `${this.state.secondNumber}${textContent}`,
      });
    } else {
      this.setState({
        firstNumber: `${this.state.firstNumber}${textContent}`,
        display: `${this.state.firstNumber}${textContent}`,
      });
    }
  }

  handleClickSign = (e) => {
    const currentSign = e.currentTarget.dataset.sign;
    if (this.state.secondNumber !== '') {
      const { sign, firstNumber, secondNumber } = this.state;
      const result = calculate(sign, firstNumber, secondNumber);
      this.setState({
        display: result,
        firstNumber: result,
        secondNumber: '',
      });
    }
    this.setState({ isSign: true, sign: currentSign });
  }

  handleClickEquals = () => {
    if (this.state.secondNumber !== '') {
      const { sign, firstNumber, secondNumber } = this.state;
      const result = calculate(sign, firstNumber, secondNumber);
      this.setState({
        display: result,
        firstNumber: result,
        secondNumber: '',
        isSign: false,
        sign: null,
      });
    }
  }

  buttons = {
    topButtons: [
      {
        className: 'calc-button calc-buttons-clear',
        text: 'Clear',
        id: 'clear',
        onClick: this.handleClickClear,
      },
      {
        className: 'calc-button calc-buttons-divide',
        text: <FontAwesomeIcon icon="divide" />,
        id: 'divide',
        onClick: this.handleClickSign,
      },
    ],
    secondButtons: [
      {
        className: 'calc-button calc-buttons-7',
        text: '7',
        id: 'seven',
        onClick: this.handleClickNumber,
      },
      {
        className: 'calc-button calc-buttons-8',
        text: '8',
        id: 'eight',
        onClick: this.handleClickNumber,
      },
      {
        className: 'calc-button calc-buttons-9',
        text: '9',
        id: 'nine',
        onClick: this.handleClickNumber,
      },
      {
        className: 'calc-button calc-buttons-times',
        text: <FontAwesomeIcon icon="times" />,
        id: 'times',
        onClick: this.handleClickSign,
      },
    ],
    thirdButtons: [
      {
        className: 'calc-button calc-buttons-4',
        text: '4',
        id: 'four',
        onClick: this.handleClickNumber,
      },
      {
        className: 'calc-button calc-buttons-5',
        text: '5',
        id: 'five',
        onClick: this.handleClickNumber,
      },
      {
        className: 'calc-button calc-buttons-6',
        text: '6',
        id: 'six',
        onClick: this.handleClickNumber,
      },
      {
        className: 'calc-button calc-buttons-minus',
        text: <FontAwesomeIcon icon="minus" />,
        id: 'minus',
        onClick: this.handleClickSign,
      },
    ],
    fourthButtons: [
      {
        className: 'calc-button calc-buttons-1',
        text: '1',
        id: 'one',
        onClick: this.handleClickNumber,
      },
      {
        className: 'calc-button calc-buttons-2',
        text: '2',
        id: 'two',
        onClick: this.handleClickNumber,
      },
      {
        className: 'calc-button calc-buttons-3',
        text: '3',
        id: 'three',
        onClick: this.handleClickNumber,
      },
      {
        className: 'calc-button calc-buttons-plus',
        text: <FontAwesomeIcon icon="plus" />,
        id: 'plus',
        onClick: this.handleClickSign,
      },
    ],
    lastButtons: [
      {
        className: 'calc-button calc-buttons-0',
        text: '0',
        id: 'zero',
        onClick: this.handleClickNumber,
      },
      {
        className: 'calc-button calc-buttons-equals',
        text: <FontAwesomeIcon icon="equals" />,
        id: 'equals',
        onClick: this.handleClickEquals,
      },
    ],
  }

  render() {
    return (
      <div className="calc">
        <div className="calc-display">
          {this.state.display}
        </div>
        <Buttons buttons={this.buttons.topButtons} />
        <Buttons buttons={this.buttons.secondButtons} />
        <Buttons buttons={this.buttons.thirdButtons} />
        <Buttons buttons={this.buttons.fourthButtons} />
        <Buttons buttons={this.buttons.lastButtons} />
      </div>
    );
  }
}
