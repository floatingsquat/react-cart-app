/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      const isItemExist = state.cart.find(
        (item) => item.id === action.payload.id
      );
      let cart = [...state.cart, { ...action.payload, qty: 1 }];
      if (isItemExist) {
        // daha önce bu product'tan eklendiyse, hangi product olduğunu bul map ile
        // içini aç ve qty'yi 1 artır. Diğerleri de aynı kalsın (x)
        cart = state.cart.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
        );
      }
      return {
        ...state,
        cart,
      };
    case "CHANGE_QTY":
      // qty'si sıfır olan elementi bulduk
      const lastQty = state.cart.find(
        (x) => x.id === action.payload.id && x.qty === 1
      );

      let val;
      if (lastQty) {
        val = state.cart.filter((x) => x.id !== action.payload.id);
      } else {
        val = state.cart.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      return {
        ...state,
        cart: val,
      };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload.id),
      };

    default:
      return state;
  }
};
