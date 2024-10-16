const initialState = {
    count: 0,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT': // corrected to match the action
        return { ...state, count: state.count + 1 };
      case 'DECREMENT': // corrected to match the action
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  