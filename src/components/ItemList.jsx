import styled from "styled-components";
import Item from "./Item";


function ItemList(props) {

  return (
    <>
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
    justify-content: space-between;
    margin:3rem auto;
    width: 80%;
    flex-wrap: wrap;
    
`
export default ItemList