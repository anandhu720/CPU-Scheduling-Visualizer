import React, { useState } from 'react';

import { Form } from 'react-bootstrap';

import { VariableForm } from './Variableform/VariableForm';

const InputForm = () => {
  const [algo, setAlgo] = useState('FCFS');

  const handleChange = (e) => {
    setAlgo(e.target.value);
  };

  return (
    <Form
      style={{
        backgroundColor: '#fff',
        padding: '100px 30px',
        borderRadius: 25,
        boxShadow: '5px 6px 10px',
      }}
    >
      <Form.Group className='mb-3'>
        <Form.Label>Algorithm</Form.Label>
        <Form.Select value={algo} onChange={handleChange}>
          <option value='FCFS'>First Come First Serve, FCFS</option>
          <option value='SJF'>Shortest Job First, SJF (Non Preemitive)</option>
          <option value='SRTF'>Shortest Remaining Time First, SRTF </option>
          <option value='RR'>Round Robin, RR </option>
          <option value='NPP'>Priority, NPP (Non Preemitive)</option>
          <option value='PP'>Priority, PP (Preemitive)</option>
        </Form.Select>
      </Form.Group>

      <VariableForm nameOfAlgo={algo} />
    </Form>
  );
};

export default InputForm;
