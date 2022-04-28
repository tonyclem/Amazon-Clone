export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0); // sum the price of the basket

const reducer = (state, action) => {
    console.log(action);
  switch (
    action.type // what the action.type is will be determined by the action.type
  ) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      }; // get the current state and add the item to the basket, then return the new state

    case "REMOVE_FROM_BASKET": // go through the basket id and which item matches the id,
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      ); // findIndex is a method that will return the index of the item that matches the action.id

      // i copy the state basket into new variable newBasket
      let newBasket = [...state.basket]; // create a new basket array called newBasket

      if (index >= 0) {
        newBasket.splice(index, 1); // splice will remove the item from the basket
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      }; // return the new state

    default:
      return state;
  }
};

export default reducer;
