export default (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      //console.log(action.payload)
     // console.log(state.cart);
      //const val = state.cart.find((x) => x.id === action.payload.id);
      let tempCartState= []
      const val = state.cart.find((x) => {
        if( x.id === action.payload.id){
          tempCartState = [...state.cart]
          const val2 = tempCartState.find((x)=> x.id === action.payload.id)
          val2.qty = val2.qty+1
          console.log(val2.qty)
         
          //console.log(x.qty)
          return x
        }
      });

      
      return {
        ...state,
        //cart: [...state.cart,  { ...action.payload, qty: 1 }],
        cart: val
          ? tempCartState
          : [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload.id),
      };
    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((x) =>
          x.id === action.payload ? (x.qty = action.payload.qty) : x.qty
        ),
      };

    default:
      return state;
  }
};
