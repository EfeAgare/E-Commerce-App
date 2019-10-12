import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../data';

const ProductContext = React.createContext() // it has both Provider and Consumer
export default class ProductProvider extends Component {

  state={
    products: storeProducts,
    detailProduct: detailProduct
  }

  handleDetail =() => {
    console.log("hello from details")
  }

  addToCart =() => {
    console.log("hello from Add to Cart")
  }
  render() {
    return (

      // creating a provider
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}


//   creating a Consumer

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }