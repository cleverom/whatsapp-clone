export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  console.log(action.USER);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.USER,
      };

    default:
      return state;
  }
};

export default reducer;
