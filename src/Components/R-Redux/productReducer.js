export const productReducer=(state={products:[],cart:[], details:[] },
    action)=>{
if(action.type==="ADD-PRODUCTS"){
    return{...state,products:[...action.data,...state.products]}
    }
    if(action.type === "ADD_CART"){
        return{...state,cart:[{...action.data,key:state.cart.length},...state.cart]}
    }
    if(action.type === "SELECTED_ITEM"){
        return{...state,details:[action.data ]}
    }if(action.type === "REMOVE_ITEM"){
        const filteredProducts=state.cart.filter((item)=>item.key !== action.data.key);
        return{...state,cart:filteredProducts}
    }return state;
}