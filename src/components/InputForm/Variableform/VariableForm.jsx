import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { inputs } from '../../../actions/inputs.action.js';

export const VariableForm = ({ nameOfAlgo }) => {
  const dispatch = useDispatch();

  const [arrivalTime, setArrivalTime] = useState('');
  const [burstTime, setBurstTime] = useState('');
  const [timeQuantum, setTimeQuantum] = useState('');
  const [priorities, setPriority] = useState('');

  const [alertbox, setAlertbox] = useState('');

  const handleArrivalChange = (e) => {
    setArrivalTime(e.target.value);
  };

  const handleBurstChange = (e) => {
    setBurstTime(e.target.value);
  };

  const handleTimeQuantumChange = (e) => {
    setTimeQuantum(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const arrivalTimeArr = arrivalTime
      .trim()
      .split(/\s+/)
      .map((at) => parseInt(at));

    const burstTimeArr = burstTime
      .trim()
      .split(/\s+/)
      .map((bt) => parseInt(bt));

    const timeQuantumInt = parseInt(timeQuantum);

    let prioritiesArr = priorities
      .trim()
      .split(/\s+/)
      .map((priority) => parseInt(priority));

    if (burstTimeArr.includes(0)) {
      setAlertbox('0 burst time is invalid');
      return;
    } else if (arrivalTimeArr.length !== burstTimeArr.length) {
      setAlertbox('Number of the arrival times and burst times do not match');
      return;
    } else if (
      arrivalTimeArr.includes(NaN) ||
      burstTimeArr.includes(NaN) ||
      (nameOfAlgo === 'RR' && isNaN(timeQuantumInt))
    ) {
      setAlertbox('Please enter only integers');
      return;
    } else if (
      arrivalTimeArr.some((t) => t < 0) ||
      burstTimeArr.some((t) => t < 0)
    ) {
      setAlertbox('Negative numbers are invalid');
      return;
    }

    if (nameOfAlgo === 'NPP' || nameOfAlgo === 'PP') {
      if (priorities.trim() === '') {
        prioritiesArr = arrivalTimeArr.map(() => 0);
      } else if (
        prioritiesArr.length !== arrivalTimeArr.length ||
        prioritiesArr.length !== arrivalTimeArr.length
      ) {
        setAlertbox(
          'Arrival times, burst times and priorities should have equal length'
        );
        return;
      }
    }

    setAlertbox('');
    console.log(nameOfAlgo);
    dispatch(
      inputs(
        nameOfAlgo,
        arrivalTimeArr,
        burstTimeArr,
        timeQuantumInt,
        prioritiesArr
      )
    );
  };

  return (
    <>
      <Form.Group className='mb-3'>
        <Form.Label>Arrival Time</Form.Label>
        <Form.Control
          type='text'
          placeholder='eg : 1 4 5 6'
          onChange={handleArrivalChange}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Burst Time</Form.Label>
        <Form.Control
          type='text'
          placeholder='eg : 1 4 5 6'
          onChange={handleBurstChange}
        />
      </Form.Group>

      {nameOfAlgo === 'RR' && (
        <Form.Group className='mb-3'>
          <Form.Label>Time Quantum</Form.Label>
          <Form.Control
            type='text'
            placeholder='eg : 3'
            onChange={handleTimeQuantumChange}
          />
        </Form.Group>
      )}

      {(nameOfAlgo === 'NPP' || nameOfAlgo === 'PP') && (
        <Form.Group className='mb-3'>
          <Form.Label>Priorities</Form.Label>
          <Form.Control
            type='text'
            placeholder='Lower # = Higher'
            onChange={handlePriorityChange}
          />
        </Form.Group>
      )}
      {alertbox !== '' && <Alert variant='danger'>{alertbox}</Alert>}
      <Button
        variant='danger'
        type='submit'
        onClick={handleSubmit}
        style={{
          marginTop: '20px',
        }}
      >
        Submit
      </Button>
    </>
  );
};
