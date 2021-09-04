import React from "react";
import Feedback from "./components/FeedbackOptions/Feedback";
import Statistics from "./components/Statistics/Statistics";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import Notification from "./components/Notification/Notification";
import { MainContainer } from "./App.styled";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;

    return (
      <MainContainer>
        <SectionTitle title="Please leave feedback">
          <Feedback
            options={["good", "neutral", "bad"]}
            handleIncrement={this.handleIncrement}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </SectionTitle>
      </MainContainer>
    );
  }
}

export default App;
