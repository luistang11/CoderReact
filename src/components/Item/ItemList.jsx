import styled from "styled-components";
import Banner from "../Banner/Banner";
import Item from "./Item";


function ItemList(props) {
  return (
    <>
        <Banner/>
        <FlexWrapper>
        {
            props.coursesList?.map((item)=>{
                return(
                        <Item 
                        key={item.id} 
                        id={item.id}
                        img={item.img} 
                        title={item.title} 
                        price={item.price} 
                        detail={item.detail}/>
                    )
            })
        }
        </FlexWrapper>
    </>
  )
}
const FlexWrapper=styled.div`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    margin:3rem auto;
    width: 75%;
    flex-wrap: wrap;
    
`
export default ItemList