import React from "react";

class Feedback extends React.Component {
  render() {
    return (
      <div className="Feedback">
        <h1>Please leave feedback</h1>
        <div className="Feedback__controls">
          <button
            type="button"
            onClick={() => {
              console.log("Кликнули");
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={() => {
              console.log("Кликнули");
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={() => {
              console.log("Кликнули");
            }}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <span className="Feedback__good">0</span>
          <span className="Feedback__neutral">0</span>
          <span className="Feedback__bad">0</span>
        </div>
      </div>
    );
  }
}

export default Feedback;
