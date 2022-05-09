import * as actions from '../actionType';

const initialState = {
  loading: false,
  nameOfAlgo: '',
  arrivalTime: [],
  burstTime: [],
  timeQuantum: 0,
  priority: [],
};

export const inputsReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.INPUTS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case actions.INPUTS_SUCCESS:
      return {
        ...prevState,
        nameOfAlgo: payload.nameOfAlgo,
        arrivalTime: payload.arrivalTime,
        burstTime: payload.burstTime,
        timeQuantum: payload.timeQuantum,
        priority: payload.priority,
        loading: false,
      };
    case actions.INPUTS_FAIL:
      return {
        ...prevState,
        nameOfAlgo: '',
        arrivalTime: [],
        burstTime: [],
        timeQuantum: 0,
        priority: [],
        loading: false,
        error: payload,
      };
    default:
      return prevState;
  }
};
