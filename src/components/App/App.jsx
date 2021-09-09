import React from 'react';
import Feedback from '../FeedbackOptions/Feedback';
import Statistics from '../Statistics/Statistics';
import SectionTitle from '../SectionTitle/SectionTitle';
import Notification from '../Notification/Notification';
import { MainContainer } from './App.styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => {
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
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback() > 0;
    const options = Object.keys(this.state);

    return (
      <MainContainer>
        <SectionTitle title="Please leave feedback">
          <Feedback options={options} handleIncrement={this.handleIncrement} />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {totalFeedback && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}

          {!totalFeedback && <Notification message="No feedback given" />}
        </SectionTitle>
      </MainContainer>
    );
  }
}

export default App;
