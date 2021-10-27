import React from 'react';

const Task = (props) => {
  const { text, date, id, active, important, finishDate } = props.task;

  const style = {
    color: 'red',
  };

  if (active) {
    return (
      <>
        <p>
          <strong style={important ? style : null}>
            {text} - do <span>{date} </span>
          </strong>
          <button
            onClick={() => {
              props.change(id);
            }}>
              Zrobione
          </button>
          <button
            onClick={() => {
              props.delete(id);
            }}>
            X
          </button>
        </p>
      </>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString()
    return (
      <>
        <p>
          <strong>
            {text}
          </strong> <em>(zrobić do {date})</em>
          <br />
          - potwiedzenie wykonania <span>{finish}</span>
          <button
            onClick={() => {
              props.delete(id);
            }}>
            X
          </button>
        </p>
      </>
    );
  }
};

export default Task;
