import { Component } from 'react';
import React from 'react';
import Statistics from '../Statistics/Statistics.jsx';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';
import Section from '../Section/Section.jsx';
import Notification from '../Notification/Notification.jsx';
import GlobalStyle from '../../GlobalStyles';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0, total: 0, positivePercentage: 0 };

  counterG = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  counterN = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  counterB = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  counters = {
    cGood: this.counterG,
    cNeutral: this.counterN,
    cBad: this.counterB,
  };

  countTotalFeedback = () => {
    this.setState((prevState) => ({
      total: prevState.good + prevState.bad + prevState.neutral,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => ({
      positivePercentage: Math.round((prevState.good / prevState.total) * 100),
    }));
  };

  render() {
    return (
      <>
        <GlobalStyle /> {/* Apply global styles */}
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.counters} />
          {this.state.total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;