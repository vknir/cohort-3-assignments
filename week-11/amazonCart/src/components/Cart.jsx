import { useSetRecoilState, useRecoilValue } from 'recoil'

import {cartItem} from '../store/cartItemState'
import Item from './Item.jsx'


function Cart()
{   const cart = useRecoilValue(cartItem)
    
    const setCartItem = useSetRecoilState(cartItem)

    function increaseQuant(inputIndex, quantity)
    {
        // console.log(index)
        let updated=[]
        setCartItem( (prev)=>{
            quantity++;

            return (prev.map( ( item, index)=>{
                if( index === inputIndex)
                    return{ ...item, quantity}
                else    
                    return {...item}
            }))
             
        })
    }
    
    function decreaseQuant(inputIndex, quantity ){

        quantity--;
        if(quantity < 0)
            quantity=0;

        setCartItem ((prev)=>{
            return ( prev.map( (item, index)=>{
                if( index === inputIndex)
                {
                    return{...item, quantity}
                }
                else
                {
                    return {...item}
                }
            }))
            
        })
    }

    function removeItem(inputIndex)
    {
        setCartItem((prev)=>{
            return ( prev.map( (item, index)=>{
                
                    
                if( index !== inputIndex)    
                    return {...item}
            }))
        })
    }

    const  items= cart.map((item, index)=>{

        return <Item key={index} removeItem={ ()=> removeItem(index)} decreaseQuant={ ()=> decreaseQuant(index, item.quantity)} increaseQuant={()=>increaseQuant(index, item.quantity) } quantity={item.quantity} price={item.price} title={item.title} status={item.status}/>
    } )

    return<div className="cart">
        <p>Shopping Cart</p>
        <div className="cart__items-wrapper">
        {items}
        </div>


    </div>
}

export default Cart;