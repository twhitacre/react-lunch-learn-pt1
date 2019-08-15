const initialState = {
  list: [{ name: 'Blantons' }, { name: 'Cake' }],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WHISKY':
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

export default appReducer;
