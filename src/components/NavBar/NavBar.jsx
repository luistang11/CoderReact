import styled from "styled-components";
import CartWidget from "../Cart/CartWidget";
import{Link} from "react-router-dom"
import logo from "../../logo.png";
import {FaBars,FaTimes} from "react-icons/fa";
import { useState } from 'react';
import {IconContext} from "react-icons"
export default function NavBar(){
    const [mobile,setMobile] =useState(false);
    return(
    <>
        <Nav>
            <Wrapper>
                <IconContext.Provider value={{style:{fontSize:'2em'}}}>
                <Link to="/"><Logo src={logo} alt="Logo" /></Link>
                <MobileIcon onClick={()=>{setMobile(!mobile)}}>

                {
                    mobile? <FaTimes/>:<FaBars/>
                }

                    
                </MobileIcon>
                <Lista open={mobile}>
                    <ItemListaNav><Link onClick={()=>{setMobile(!mobile)}} className="a" to="/">Inicio</Link></ItemListaNav>
                    <ItemListaNav><Link onClick={()=>{setMobile(!mobile)}} className="a" to="/category/masculino">Masculino</Link></ItemListaNav>
                    <ItemListaNav><Link onClick={()=>{setMobile(!mobile)}} className="a" to="/category/femenino">Femenino</Link></ItemListaNav>
                    {/* <ItemListaNav><Link onClick={()=>{setMobile(!mobile)}} className="a" to="#">Ayuda</Link></ItemListaNav>
                    <ItemListaNav><Link onClick={()=>{setMobile(!mobile)}} className="a" to="#">Contacto</Link></ItemListaNav> */}
                </Lista>
                </IconContext.Provider>
            </Wrapper>
            <CartWidget/>
            
        </Nav>
    </>
    );
}


const Nav=styled.nav`
    width: 100%;
    padding:15px 0;
    margin:auto;
    display: flex;
    align-items: center;
    background-color:#fff;
    justify-content: space-between;
    box-shadow: 0 0 5px 0;
`
const Wrapper=styled.div`
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    align-items: center;
    display: flex;
    justify-content: space-between;
`
const Lista=styled.ul`
    margin-left:35%;
    list-style:none;
    @media (max-width:1380px) {
        margin-left:22%;
    }
    
    @media (max-width:1186px) {
        position: absolute;
        margin-left: 0;
        width: 100%;
        top: 100px;
        display: ${({open})=>(open?"block":"none")};
        right: ${({open})=>(open?"0":"-100%")};
        height: 45vh;
        justify-content: center;
        flex-direction: column !important;
        align-items: center;
        transition:.5s all ease;
        background-color: #fff;
    }
`
const Logo=styled.img`
    width: 150px;
    padding: .3rem 1rem;
    margin-left: 30px;
    transition: 0.3s;
    margin-left:3rem ;
    :hover{
        transform: scale(1.12);
    }
    @media (max-width:500px){
        margin-left:0;
    }
`
const ItemListaNav=styled.li`
    text-decoration: none;
    padding: 10px 0;
    color: black;
    font-size: 1.2rem;
    font-family: Roboto,"sans-serif";
    list-style: none;
    margin:0 20px;
    display: inline-block;
    :hover{
    color:red;
    }
    .a{
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        text-decoration: none;
        
        @media (max-width:1186px) {
            width: 100%;
            padding:1.5rem;
            :hover{
            background-color: #3bd9;
        }
        }
    }
    @media (max-width:1186px){
        width: 100%;
        margin:0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`
const MobileIcon=styled.div`
    display:none;
    @media (max-width:1186px) {
        display: block;
        align-items: center;
        cursor: pointer;

        svg{
            fill: #000;
            margin-right: .5rem;
        }
    }

`
