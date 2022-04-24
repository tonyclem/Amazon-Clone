export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
    console.log(action);
  switch (
    action.type // what the action.type is will be determined by the action.type
  ) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
