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
            <div style={{borderRight:'1px solid black',height:'97%'}}>
            <Image src={item.img} alt={item.title} />
            </div>
            <div style={{display:'block',width:'15%',textAlign:'center',margin:'0 auto'}}>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
              <h3>${item.price}</h3>
              {count===0 ? 
              <ItemCount OnAdd={handleOnAdd} stock={item.stock}/>
              : 
              <Link to='/cart'> <Button title='ver carrito'></Button> </Link>
              }
            </div>
          </ContainerItemDetail>
      
    </>
  )
}
const Image=styled.img`
    width:100%;
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
`

export default ItemDetail