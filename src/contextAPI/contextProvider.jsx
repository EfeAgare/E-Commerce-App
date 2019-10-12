import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../data';

const ProductContext = React.createContext() // it has both Provider and Consumer
export default class ProductProvider extends Component {

  state={
    products: [],
    detailProduct: detailProduct
  }

  componentDidMount() {
    this.setProducts()
  }
  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = {
        ...item
      };
      products = [...products, singleItem]
    })
    this.setState(() => {
      return {
        products
      }
    })
  }
  handleDetail =() => {
    console.log("hello from details")
  }

  addToCart =(id) => {
    console.log(id )
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