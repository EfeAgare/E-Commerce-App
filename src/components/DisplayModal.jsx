import React, { Component } from 'react'
import { ProductConsumer } from '../contextAPI/contextProvider';
import { ButtonContainer } from '../styles/Button';
import { Link } from 'react-router-dom';
import { ModalContainer } from '../styles/ModalContainer';

export default class DisplayModal extends Component {
  render() {
    return (
      <ProductConsumer>{(value) => {
        const {modalOpen, closeModal, modalProduct: {img, title, price}} = value
        if (!modalOpen) {
          return null
        } else {
          return (<ModalContainer>
            <div className="container">
              <div className="row">
                <div id="modal"className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                  <h5>Item added to cart</h5>
                  <img src={img} alt="modal" className="img-fluid" />
                  <h5>{title}</h5>
                  <h5 className="text-muted">price : $ {price}</h5>
                  <Link to="/">
                    <ButtonContainer letter onClick={()=> closeModal()}>
                      Continue Shopping
                    </ButtonContainer>
                  </Link>
                  <Link to="/cart"> 
                    <ButtonContainer cart  letter onClick={()=> closeModal()}>
                      Go to cart
                    </ButtonContainer>
                  </Link>
                </div>
              </div>
            </div>
           </ModalContainer>
           )
        }
      }}
      </ProductConsumer>
    )
  }
}

