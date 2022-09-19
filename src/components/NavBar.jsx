import styled from "styled-components";
import CartWidget from "./CartWidget";

export default function NavBar(){
    return(
    <>
        <Nav>
            <Logo src="https://cdn-icons-png.flaticon.com/512/427/427410.png" alt="Logo" />
            <Titulo>VIRGO CUEVA STORE</Titulo>
            <ul>
                <ItemListaNav><LinkListanav href="#">Categorías</LinkListanav></ItemListaNav>
                <ItemListaNav><LinkListanav href="#">Ofertas</LinkListanav></ItemListaNav>
                <ItemListaNav><LinkListanav href="#">Recomendaciones</LinkListanav></ItemListaNav>
                <ItemListaNav><LinkListanav href="#">Ayuda</LinkListanav></ItemListaNav>
            </ul>
            <CartWidget/>
        </Nav>
    </>
    );
}


const Nav=styled.nav`
    width: 80%;
    padding:35px 0;
    margin:auto;
    display: flex;
    align-items: center;
    background-color:#534eb6;
    justify-content: space-between;
`
const Logo=styled.img`
    width: 80px;
    padding: .3rem 1rem;
    margin-left: 30px;
`
const Titulo=styled.h2`
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2rem;
`
const LinkListanav=styled.a`
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    font-family: Roboto,"sans-serif";
`
const ItemListaNav=styled.li`
list-style: none;
margin:0 20px;
display: inline-block;
position: relative;
::before{
    content: "";
    height: 3px;
    width: 0%;
    background: yellowgreen;
    position: absolute;
    left:0;
    bottom: -12px;
    transition: 0.4s ease-out;
}
:hover::before{
width: 100%;
}
`;