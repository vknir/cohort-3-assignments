import {  selector } from "recoil";

import { cartItem } from "./cartItemState";

const cartTotalSelector = selector({
    key:'TotalItems',
    get : ({get})=>{
        let count =0;
        let price=0;
        const items=get(cartItem)   
        
        items.forEach( (item)=>{
            count+=item.quantity
            price+=(item.price * item.quantity)
        })
        price = price.toFixed(2);
        
        return {count,price}
    }
})



export {cartTotalSelector}