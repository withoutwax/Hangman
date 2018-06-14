import React, { Component } from 'react';

class Guess extends Component {
  // Guess component take in an input from the user.
  constructor() {
    super();
    this.state = {
      inputValue: 'a'
    };
    this.inputChange = this.inputChange.bind(this);
    this.inputSubmit = this.inputSubmit.bind(this);
  }

  inputChange(event) {
    this.setState({inputValue: event.target.value});
  }

  inputSubmit(event) {
    console.log("Submit button clicked!", this.state.inputValue);
    // this.setState({
    //   inputValue: event.target.value
    // });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.inputSubmit}>
          <label>
            Guesses:
            <input type="text" value={this.state.inputValue} onChange={this.inputChange}/>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    );
  }
}

export default Guess;
