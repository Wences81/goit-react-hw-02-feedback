import React from "react";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  counterNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  counterBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className="Feedback">
        <h2>Please leave feedback</h2>
        <div className="Feedback__controls">
          <button type="button" onClick={this.counterGood}>
            Good
          </button>

          <button type="button" onClick={this.counterNeutral}>
            Neutral
          </button>

          <button type="button" onClick={this.counterBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div className="Feedback__controls">
          <p className="Feedback__good">Good: {this.state.good}</p>
          <p className="Feedback__neutral">Neutral: {this.state.neutral}</p>
          <p className="Feedback__bad">Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
