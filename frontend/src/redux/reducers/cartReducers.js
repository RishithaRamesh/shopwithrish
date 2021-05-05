import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: //case where we want to add to cart
      const item = action.payload; //item we want to add

      //now we check if item already exists in cart
      const existItem = state.cartItems.find((x) => x.product === item.product); //here in x.product, the product will contain ID of x and then compares ID's of x and item

      if (existItem) { //we check if item is already in cart
        return {
          ...state,//we spread th state in this line
          cartItems: state.cartItems.map((x) => 
            x.product === existItem.product ? item : x
          ), //here we map through each item in the array and we check where the selected product (x.product) === existing item 
        };//if its true, item variable is updated with new item or else x. 
      } else {
        return {
          ...state,//we spread th state in this line
          cartItems: [...state.cartItems, item], //add new item into array
        };
      }

    case actionTypes.REMOVE_FROM_CART: //case where we want to remove from cart
      return {
        ...state,//we spread th state in this line
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }; //we add everything to the new array where req ele ID does not match ID in the list (basically removing from cart)
    default:
      return state;
  }
};