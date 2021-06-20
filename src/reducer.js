export const initialState = {
  basket: [],
};
// Selector fancy for loop
export const getBasketTotal = (basket) =>
  basket?.reduce((amout, item) => item.price + amout, 0);

const reducer = (state, action) => {
  // console.log("action >>>",action)
  // console.log("state >>> ",state)
  // console.log("-------------")
  switch (action.type) {
    // dispatch action
    case "ADD_TO_BASKET":
      return {
        ...state,
        // push item into basket
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        // all the basket item,     action.id is the item that passed in
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    // return {
    //   ...state,
    //   basket: state.basket.filter(item=>item.id !== action.id)
    // };

    default:
      return state;
  }
};

export default reducer;
