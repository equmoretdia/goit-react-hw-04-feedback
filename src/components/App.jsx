import { useState } from 'react';
import css from './App.module.css';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export default function App() {
  const [state, setState] = useState({
    good: 0,
    bad: 0,
    ugly: 0,
  });

  const addFeadback = e => {
    // console.log(e.target);
    const { name } = e.target;
    setState(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const countTotalFeedback = ({ good, bad, ugly } = state) => good + bad + ugly;

  const countPositiveFeedbackPercentage = ({ good, bad, ugly } = state) => {
    const total = good + bad + ugly;
    const percentage = total > 0 ? (good / total) * 100 : 0;
    return percentage.toFixed(2) + '%';
  };

  const { good, bad, ugly } = state;
  const options = Object.keys(state);
  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();
  return (
    <div className={css.app}>
      <h1 className={css.hidden}>Feedback Widget</h1>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={addFeadback} />
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
