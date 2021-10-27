import React from 'react';
import { useState } from 'react';
import './AddTask.scss';

const AddTask = (props) => {
  const [stateText, setStateText] = useState('');
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const todayDate = new Date().toISOString().slice(0, 10);
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleText = (e) => {
    setStateText(e.target.value);
  };
  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  };

  const handleClick = () => {
    if (stateText.length > 0) {
      const add = props.add(stateText, date, checked);
      if (add) {
        setStateText('');
        setChecked(false);
        setDate(todayDate);
      }
    } else return;
  };

  return (
    <>
      <div className='form'>
        <input
          type='text'
          placeholder='Dodaj zadanie'
          value={stateText}
          onChange={handleText}
        />
        <input
          type='checkbox'
          name=''
          id='important'
          checked={checked}
          onChange={handleCheckbox}
        />
        <label htmlFor='important'>Ważne</label> <br />
        <label htmlFor='date'>Termin ukończenia</label>
        <input
          type='date'
          name=''
          id=''
          min={date}
          value={date}
          onChange={handleDate}
        />
        <button onClick={handleClick}>Dodaj</button>
      </div>
    </>
  );
};

export default AddTask;
