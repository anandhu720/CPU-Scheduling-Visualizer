import { fcfs } from './fcfs.js';
import { sjf } from './sjf';
import { srtf } from './srtf';
import { rr } from './rr';
import { npp } from './npp';
import { pp } from './pp';

export const solve = (
  selectedAlgo,
  arrivalTime,
  burstTime,
  timeQuantum,
  priorities
) => {
  if (selectedAlgo === 'FCFS') {
    return fcfs(arrivalTime, burstTime);
  } else if (selectedAlgo === 'SJF') {
    return sjf(arrivalTime, burstTime);
  } else if (selectedAlgo === 'SRTF') {
    return srtf(arrivalTime, burstTime);
  } else if (selectedAlgo === 'RR') {
    return rr(arrivalTime, burstTime, timeQuantum);
  } else if (selectedAlgo === 'NPP') {
    return npp(arrivalTime, burstTime, priorities);
  } else if (selectedAlgo === 'PP') {
    return pp(arrivalTime, burstTime, priorities);
  } else {
    return;
  }
};
