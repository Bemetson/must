
const initialState = {
  points: 0,
};

export default function pointStore(state = initialState, action = {}) {
  switch (action.type) {
    case 'INCREASE_POINTS':
      return {
        ...state,
        points: state.points + action.points,
      };
    case 'BUY_PRODUCT':
      if (state.points >= action.price) {
        return {
          ...state,
          points: state.points - action.price,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
