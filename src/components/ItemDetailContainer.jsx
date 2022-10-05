import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import { getSingleCurso } from "../mockAPI/mockAPI";
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
function ItemDetailContainer(props) {
const [item,setItem]=useState([]);


const {id}=useParams();

    useEffect(()=>{
        getSingleCurso(id).then((data)=>{
            setItem(data);
        })
    },[id]);

    return (
        <>
            <ContainerItemDetail>
                <ItemDetail title={item.title} img={item.img} price={item.price} detail={item.detail}/> 
                <ItemCount stock={item.stock}/>
            </ContainerItemDetail>
        </>
      )
}
const ContainerItemDetail=styled.div`
width: 80%;
height: 600px;
background-color: orange;
display:flex;
justify-content: center;
align-items: center;
margin:0 auto;
`
export default ItemDetailContainer