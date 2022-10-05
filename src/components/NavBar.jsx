import styled from "styled-components";
import CartWidget from "./CartWidget";
import{Link} from "react-router-dom"

export default function NavBar(){
    return(
    <>
        <Nav>
            <Link to="/"><Logo src="https://cdn-icons-png.flaticon.com/512/427/427410.png" alt="Logo" /></Link>
            <Titulo>VIRGO CUEVA STORE</Titulo>
            <ul>
                <Link to="/"><ItemListaNav>Inicio</ItemListaNav></Link>
                
                <Link to="/category/programacion"><ItemListaNav>Programacion</ItemListaNav></Link>

                <Link to="/category/diseño"><ItemListaNav>Diseño</ItemListaNav></Link>
                <Link to="#"><ItemListaNav>Recomendaciones</ItemListaNav></Link>
                <Link to="#"><ItemListaNav>Ayuda</ItemListaNav></Link>
            </ul>
            <CartWidget/>
        </Nav>
    </>
    );
}


const Nav=styled.nav`
    width: 100%;
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
    transition: 0.3s;
    :hover{
        transform: scale(1.15);
    }
`
const Titulo=styled.h2`
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2rem;
`

const ItemListaNav=styled.li`
text-decoration: none;
color: white;
font-size: 1.2rem;
font-family: Roboto,"sans-serif";
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
    bottom: -10px;
    transition: 0.4s ease-out;
}
:hover::before{
width: 100%;
}
`;