import { FETCH_QUOTES } from '../actions/simpsons';

const initialState = [];

export default function reducer(state = initialState, action) {
  console.log(action.payload);
  switch(action.type) {
    case FETCH_QUOTES:
      return [...state, ...action.payload];
    default:
      return state;

  }
}
