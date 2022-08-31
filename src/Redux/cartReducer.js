// Define an initial state value for the app
const initialState ={
    cartItems:['item']
}
//create reducers to manipulate the state

//then write the switchcase to know which type of action
export const cartReducer=(state=initialState, action)=>{

    switch(action.type){
        case 'ADD_TO_CART':{
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    }
        default : return state
    }
}