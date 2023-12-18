import React from 'react';
import css from './App.module.css';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

class App extends React.Component {
  state = {
    good: 0,
    bad: 0,
    ugly: 0,
  };

  addFeadback = e => {
    // console.log(e.target);
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = ({ good, bad, ugly } = this.state) => good + bad + ugly;

  countPositiveFeedbackPercentage = ({ good, bad, ugly } = this.state) => {
    const total = good + bad + ugly;
    const percentage = total > 0 ? (good / total) * 100 : 0;
    return percentage.toFixed(2) + '%';
  };

  render() {
    const { good, bad, ugly } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.app}>
        <h1 className={css.hidden}>Feedback Widget</h1>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeadback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              bad={bad}
              ugly={ugly}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <Notification message="There is no feedback yet" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
