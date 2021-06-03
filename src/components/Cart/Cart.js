import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import Emptycart from './EmptyCart';
import {ProductConsumer} from '../ProductProvider';
import CartList from './CartList';
import CartTotals from './CartTotals';
export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value)=>{
                       const {cart}=value;
                      if(cart.length>0){
                          return (
                              <>
                              <Title>Your Cart</Title>
                              <CartColumns></CartColumns>
                              <CartList value={value}></CartList>
                              <CartTotals value={value}></CartTotals>
                              </>
                          );
                      }
                      else{
                          return  <Emptycart></Emptycart>
                      }

                    }}
                </ProductConsumer>
                
               
            </section>
        )
    }
}
