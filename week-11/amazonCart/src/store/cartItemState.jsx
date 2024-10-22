import { atom } from "recoil";

const cartItem = atom({
    key:'cartItem',
    default: [{
                title:'Title 1',
                price:100,
                quantity:1,
                status:true,
            },
            {
                title:'Title 2',
                price:1200,
                quantity:1,
                status:true,
            }
    ]
})

export {cartItem}