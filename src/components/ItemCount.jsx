import React from 'react'
import { useState } from 'react';
import styled from "styled-components";


function ItemCount(props) {
  const [productCount,setProductCount] =useState(0);
function handleSubstract(){
  if(productCount>1) {
    setProductCount(productCount-1);
  }
}
function handleAdd(){
  if(productCount<props.stock){
    setProductCount(productCount+1);
  }
  
}

  return (
    <ContainerItemCount>
      <p>Stock disponible: {props.stock}</p>
      <ContainerBtnItemCount>
          <BtnCount onClick={handleSubstract}>-</BtnCount>
          <strong>{productCount}</strong>
          <BtnCount onClick={handleAdd}>+</BtnCount>
      </ContainerBtnItemCount>
      <AgregarAlCarritoBtn>Agregar al carrito</AgregarAlCarritoBtn>
    </ContainerItemCount>
  )
}

export default ItemCount;

const ContainerItemCount=styled.div`
  display: block;
  flex-direction: column;
  margin:0 20px;
`

const ContainerBtnItemCount=styled.div`
margin: 0 auto;
border-radius: 3px;
border: 1px solid #f3f3f3; 
width: 150px;
display: flex;
justify-content: space-between;
align-items: center;

`
const BtnCount=styled.button`
border:none;
border-radius:3px;
font-size: 2rem;
transition:0.3s;
width: 41px;
cursor: pointer;

:hover{
  background-color: #7e7e83;  
}
`
const AgregarAlCarritoBtn=styled.button`
  width: 140px;
  height: 45px;
  margin-left: 5px;
  margin-top: 1.2rem;
  border-radius: 10px;
`



