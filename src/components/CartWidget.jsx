import styled from "styled-components";
export default function CartWidget(){
    return(
        <>
            <a href="#"><Carrito className="bi bi-cart"></Carrito></a>
        </>
    );
}

const Carrito=styled.div`
    width: 3rem;
    margin-left: 3rem;

`