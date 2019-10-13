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

  getItem =(id) => {
    const product = this.state.products.find(item => item.id === parseInt(id))
    return product

  }
  handleDetail =(id) => {
    const product = this.getItem(id)
    this.setState(
      () => {
        return {
          detailProduct: product
        };
      }
    )
  }

  addToCart =(id) => {
    let tempProducts = [...this.state.products];
    const product = this.getItem(id);
    // const index = tempProducts.indexOf(product);
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, product]
      }
    },
      () => {
        this.addTotals();
      })
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