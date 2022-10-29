import styled from "styled-components";
import {useState,useContext} from 'react'
import ItemCount from '../Count/ItemCount';
import {cartContext} from "../../context/CartContextProvider";
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
function ItemDetail({item}) {
  const [count,setCount] =useState(0);
  const {addToCart}=useContext(cartContext);


  function handleOnAdd(count){
    addToCart(item,count);
    setCount(count);
  }
  return (
    <>
      
          <ContainerItemDetail>
            <ContainerImg>
              <Image src={item.img} alt={item.title} />
            </ContainerImg>
            <ContainerInfo >
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
              <h3>${item.price}</h3>
              {count===0 ? 
              <ItemCount OnAdd={handleOnAdd} stock={item.stock}/>
              : 
              <Link to='/cart'> <Button title='ver carrito'></Button> </Link>
              }
            </ContainerInfo>
          </ContainerItemDetail>
      
    </>
  )
}
const ContainerImg=styled.div`
  border-right:1px solid black;
  height:97%;
  @media(max-width:850px){
    border:none;
    width: 100%;
    height: 300px;
    text-align: center;
  }
`
const Image=styled.img`
  width:100%;
  @media(max-width:850px){
    width: 300px;
    margin: 0 auto;
  }

  
`
const ContainerInfo=styled.div`
  display:block;
  width:15%;
  text-align:center;
  margin:0 auto;
  @media(max-width:850px){
    width: 30%;
  }
`
const ContainerItemDetail=styled.div`
width: 80%;
height: 600px;
box-shadow: 1px 1px 1px 1px;
background: white;
display:flex;
justify-content: center;
align-items: center;
margin:6% auto 0 auto;

@media(max-width:850px){
  flex-direction: column;
  height: 120%;
  padding: 2rem;
}
`

export default ItemDetail