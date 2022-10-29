import React,{useContext} from 'react'
import styled from "styled-components";
import {cartContext} from '../../context/CartContextProvider'
import CartEmpty from './CartEmpty';
import CartFull from './CartFull';
import {createBuyOrder} from '../../services/firebase'
import FormCart from '../Form/Form'
import{useNavigate} from 'react-router-dom';

function Cart() {
  const {cart,clearCart,getTotalPrice,buyerID}=useContext(cartContext);
  const navigate=useNavigate();
  function handleChekout(name,lastName,email,phone){
    const buyerData={
      name,
      lastName,
      email,
      phone,
    }
    const orderData={
      buyerData: buyerData,
      cart:cart,
      total:getTotalPrice(),
      date: new Date(),
    }
    createBuyOrder(orderData).then((respuesta) => {
      buyerID(respuesta)
      clearCart()
      
      navigate('/chekout')

    });    
  }
  return (
    <>
      {
        (cart.length > 0)?
          <CartContainer>
            
            <div style={{display:'flex',justifyContent:'space-between', flexWrap:'wrap',marginTop:'2rem'}}>
              
              <ContainerCartFull >
                <div onClick={()=>clearCart()} style={{width:'80%',margin:'10px auto'}}>
                  <Botonn>Vaciar Carrito</Botonn>
                </div>
                <CartFull cart={cart}/>
              </ContainerCartFull>
              <ContainerForm>
                <FormCart handleChekout={handleChekout} />
              </ContainerForm>
            </div>
            <h2 style={{textAlign:'right',padding:' 0 1rem',borderTop:'1px solid black'}}>Subtotal: ${getTotalPrice()}</h2>
          </CartContainer>
          :
          <CartEmpty/>
      
      }

    </>
  )
}

const Botonn=styled.button`
background-color: transparent;
  color:red;
  font-size:12px;
  font-weight: 400;
  width: 100%;
  text-transform: uppercase;
  border:2px solid red;
  height: 45px;
  margin-top: 1.2rem;
  border-radius: 32px;
  cursor: pointer;
  :hover{
    animation: pulso 1s ease-in-out;
  }
  @keyframes pulso {
    0%{
      box-shadow:
      0 0 25px red,
      0 0 50px red
    }
  }
`
const CartContainer=styled.div`
  border-radius:  0 30px;
  width: 80%;
  border: 1px solid black;
  margin:5rem auto 0 auto;
`
const ContainerCartFull=styled.div`
height:300px;
line-height: 1em;
overflow-x: hidden;
overflow-y:scroll,;
width: 50%;
@media (max-width:850px) {
  width: 100%;
}

`
const ContainerForm=styled.div`
width: 50%;

display: flex;
justify-content: center;
@media (max-width:850px) {
  width: 90%;
}
`

export default Cart