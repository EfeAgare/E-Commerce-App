import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from "../contextAPI/contextProvider"
class ProductList extends Component {
  state = {
    products: storeProducts
  }
  render() {
    return ( <Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products"/>
        </div>
        <div style={{marginLeft: "unset !important"}}>
          <ProductConsumer>
            {(value)=>{
              return <h1>{value}</h1>
            }}
          </ProductConsumer>
        </div>
      </div>
    </Fragment> );
  }
}

export default ProductList;