// Define an initial state value for the app
const initialState ={
    cartItems:[]
}
//create reducers to manipulate the state

//then write the switchcase to know which type of action
export const cartReducer=(state=initialState, action)=>{

    switch(action.type){


        default : return state
    }
}