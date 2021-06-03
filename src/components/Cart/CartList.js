import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart}=value;
    return (
        
               <div className="container-fluid">
               { cart.map(product =>{ return <CartItem key={product.id} product={product} value={value}></CartItem>})}
               </div>
           
            
        
    )
}
