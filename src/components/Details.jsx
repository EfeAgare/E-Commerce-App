import React, { Component } from 'react'
import { ProductConsumer } from "../contextAPI/contextProvider"
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../styles/Button';
export default class Details extends Component {

  state ={
    id: null
  }
  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    })
  }
  render() {
    // const {id} = this.state
    return (
      <div>
       <ProductConsumer>
         { (value) => {
        const app = value.products.filter(product => {
          return parseInt(product.id) === parseInt(this.state.id)
        })
        //  const {id, company, info, title, img, price, inCart} = 
        return app.map(item => <div key={item.id} className="container py-5">
           <div className="row">
             <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
               <h1>{item.title}</h1>
               </div>
           </div>
           <div className="row">
             <div className="col-10 mx-auto col-md-6 my-3">
                <img src={`${item.img}`} alt="details" className="img-fluid" />
             </div>
             <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
               <h1>model : {item.title }</h1>
               <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                 made by : <span className="text-uppercase">{item.company}</span>
               </h4 >
               <h4 className="text-blue">
                 <strong>
                   price : <span>$</span> {item.price}
                 </strong>
               </h4>
               <p className="text-capitalize font-weight-bold mt-3 mb-0">
                 some info about product : 
               </p>
               <p className="text-muted lead">{item.info}</p>
               <div>
                 <Link to="/">
                   <ButtonContainer>
                     Back to products
                   </ButtonContainer>
                 </Link>
           
                   <ButtonContainer disabled={
          item.isCart ? true : false  
          }
          onClick={() => value.addToCart(item.id)}>
                   {item.inCart ? "inCart" : "add to cart" }
          
                   </ButtonContainer>
                
               </div>
             </div>
           </div>
         </div>)
      }}
       </ProductConsumer> 
      </div>
    )
  }
}
