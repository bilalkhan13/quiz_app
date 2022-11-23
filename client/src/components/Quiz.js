import React, { useEffect } from 'react';
import Questions from './Questions';

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';

/** redux store import */
import { useSelector, useDispatch } from 'react-redux';

export default function Quiz() {
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trace);
  });

  /** next button event handler */
  function onNext() {
    console.log('On next Click');

    {
      /** update the trace value by one using MoveNextAction */
    }
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
    }
  }

  /** prev button event handler */
  function onPrev() {
    if (trace > 0) {
      /** increase the trace value by one using MoveNextAction */
      dispatch(MovePrevQuestion());
    }
    console.log('On prev Click');
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display question*/}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
