import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, bad, ugly, total, positivePercentage }) => {
  return (
    <ul className={css.wrapper}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Ugly: {ugly}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive feedback: {positivePercentage}</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  ugly: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
