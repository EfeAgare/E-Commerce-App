import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
// import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../../contextAPI/contextProvider'
// import CartList from './CartList'
// import CartTotals from './CartTotals'
export default class Cart extends Component {
  render() {
    return (
      <section>
<Title name="your" title="cart"/>
<CartColumns/>
      </section>


    )
  }
}
