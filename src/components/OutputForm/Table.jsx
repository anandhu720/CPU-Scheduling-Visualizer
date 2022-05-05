import React from 'react';

import './_table.scss';

const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

const Table = ({ value: solvedProcessesInfo }) => {
  const total = (array) =>
    array.reduce((acc, currentValue) => acc + currentValue, 0);

  const numberOfProcesses = solvedProcessesInfo.length;
  const turnaoundTime = solvedProcessesInfo.map((process) => process.tat);
  const waitingTime = solvedProcessesInfo.map((process) => process.wat);

  const totalTAT = total(turnaoundTime);
  const averageTAT = totalTAT / numberOfProcesses;

  const totalWAT = total(waitingTime);
  const averageWAT = totalWAT / numberOfProcesses;

  return (
    <>
      <table class='rwd-table'>
        <thead>
          <tr>
            <td>Job</td>
            <td>Arrival Time</td>
            <td>Burst Time</td>
            <td>Finish Time</td>
            <td>Turn Around Time</td>
            <td>Waiting Time</td>
          </tr>
        </thead>
        <tbody>
          {solvedProcessesInfo.map((item, index) => (
            <tr key={`process-row-${item.job}`}>
              <td>{item.job}</td>
              <td>{item.at}</td>
              <td>{item.bt}</td>
              <td>{item.ft}</td>
              <td>{item.tat}</td>
              <td>{item.wat}</td>
            </tr>
          ))}
          {
            <tr>
              <td colSpan={4} style={{ textAlign: 'right' }}>
                Average
              </td>
              <td>
                {totalTAT} / {numberOfProcesses} ={' '}
                {precisionRound(averageTAT, 3)}
              </td>
              <td>
                {totalWAT} / {numberOfProcesses} ={' '}
                {precisionRound(averageWAT, 3)}
              </td>
            </tr>
          }
        </tbody>
      </table>
    </>
  );
};

export default Table;
