import styled from "styled-components";
export default function ItemListContainer(props){
    return(
        <>
            <Titulo>{props.greeting}</Titulo>
        </>
    );
};

const Titulo=styled.div`
text-align: center;
font-size: 3rem;
`