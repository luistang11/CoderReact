import styled from "styled-components";
export default function CartWidget(){
    return(
    <>
        <Carrito className="bi bi-cart"></Carrito>
    </>
    );
}

const Carrito=styled.i`
    width: 3rem;
    margin-left: 3rem;

`