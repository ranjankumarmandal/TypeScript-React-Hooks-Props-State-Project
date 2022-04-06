import React, { useReducer } from 'react';

interface Action {
  type: string;
  payload: string;
}
interface S {
  text: string;
  complete: boolean;
}
type State = S[];

const testReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.payload, complete: false }];

    case 'remove':
      return state.filter((item) => item.text !== action.payload);

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(testReducer, []);

  return <div>UseReducer</div>;
};

export default UseReducer;
