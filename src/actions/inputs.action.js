import * as actions from '../actionType.js';

export const inputs =
  (nameOfAlgo, arrivalTime, burstTime, timeQuantum, priority) =>
  async (dispatch) => {
    try {
      dispatch({
        type: actions.INPUTS_REQUEST,
      });

      dispatch({
        type: actions.INPUTS_SUCCESS,
        payload: {
          nameOfAlgo: nameOfAlgo,
          arrivalTime: arrivalTime,
          burstTime: burstTime,
          timeQuantum: timeQuantum,
          priority: priority,
        },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: actions.INPUTS_FAIL,
        payload: err.message,
      });
    }
  };
