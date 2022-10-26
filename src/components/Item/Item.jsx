import React from 'react'
import styled from "styled-components";
import{Link} from "react-router-dom"
function Item(props) {
  return (
    <>
      <Link to={`/perfume/${props.id}`} style={{textDecoration:"none"}}>
        <Card>
          <div style={{height:'90%'}}>
            <Image  src={props.img} alt={props.title} />
            <div style={{height:'13%',borderTop:'2px solid #f5f5f5'}}>
              <h2 style={{fontSize:'19px'}}>{props.title}</h2>
            </div>
            <h3>${props.price}</h3>
            <p>{props.detail}</p>
          </div>
            <Comprar>Compra Ahora</Comprar>
        </Card>
      </Link>
    </>
  )
}
const Card=styled.div`
    color:black;
    width:250px;
    height: 470px;
    padding: 1.5rem;
    border: 1px solid transparent;
    text-align: center;
    margin: 2rem 1rem;
    transition: 0.3s;
    background-color:#fff;
    cursor: pointer;
    :hover{
      border: 1px solid black;
      img{transform: scale(1.03)};
    }
    
`
const Image=styled.img`
    width:100%;
    transition: 0.3s;
    
`
const Comprar=styled.div`
  width: 100%;
  background-color: black;
  color: white;
  height: 40px;
  display:flex;
  align-items: center;
  justify-content: center;
  

`


export default Item