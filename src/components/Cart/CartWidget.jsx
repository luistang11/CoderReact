import styled from "styled-components";
import { useContext } from "react";
import {cartContext} from "../../context/CartContextProvider"
import{Link} from "react-router-dom"

export default function CartWidget(){
    const {getTotalItemCount}=useContext(cartContext);
    

    return(
        <>
        <div style={{alignItems: 'center'}}>
            <Link style={{textDecoration:'none',color:'black',fontSize:'1.24rem'}} to="/cart">
                <Carrito className="bi bi-cart">
                    <ItemsCount>
                    <span>
                    {
                        //si no se cumple la primera, ni evalua la segunda
                        getTotalItemCount()>0 && getTotalItemCount()
                    }
                    </span>
                    </ItemsCount>
                </Carrito>
            
            </Link>
        </div>    
        </>
    );
}

const Carrito=styled.div`
    width: 3rem;
    padding: 0 2rem;
    height: 30px;
`
const ItemsCount=styled.div`
    width: 25px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    top: -30px;
    left: 12px;

`