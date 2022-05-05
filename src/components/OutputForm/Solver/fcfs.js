export const fcfs = (arrivalTime, burstTime) => {
  const processesInfo = arrivalTime
    .map((item, index) => {
      return {
        job: (index + 10).toString(36).toUpperCase(),
        at: item,
        bt: burstTime[index],
      };
    })
    .sort((obj1, obj2) => {
      if (obj1.at > obj2.at) {
        return 1;
      }
      if (obj1.at < obj2.at) {
        return -1;
      }
      return 0;
    });

  let finishTime = [];

  const solvedProcessesInfo = processesInfo.map((process, index) => {
    if (index === 0 || process.at > finishTime[index - 1]) {
      finishTime[index] = process.at + process.bt;
    } else {
      finishTime[index] = finishTime[index - 1] + process.bt;
    }

    return {
      ...process,
      ft: finishTime[index],
      tat: finishTime[index] - process.at,
      wat: finishTime[index] - process.at - process.bt,
    };
  });

  return { solvedProcessesInfo };
};
