import {useEffect,useState} from 'react'
import { getSingleItem } from "../../services/firebase";
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

import Loader from '../loader/Loader';
function ItemDetailContainer() {
    const [item,setItem]=useState([]);
    const [loading,setLoading] = useState(true);
    const [feedbackMsg,setFeedbackMsg] = useState(null);
    const {id}=useParams();

    useEffect(()=>{
        getSingleItem(id)
        .then((data)=>{
            if(data!==undefined){
              setItem(data);
            }else{
              throw new Error()
            }
        })
        .catch(()=>setFeedbackMsg('Producto inexstente'))
        .finally(()=>setLoading(false));
    },[id]);

      return(
        <>
        {loading ? <Loader/> :feedbackMsg  
        ?
          <h4>Error:{feedbackMsg}</h4>
        :

            <ItemDetail item={item}/> 

        }
        </> 
      )
      // if(item.title){
      //   return (
      //           <ContainerItemDetail>
      //               <div style={{borderRight:'1px solid black',height:'97%'}}>
      //               < ItemDetail title={item.title} img={item.img}/> 
      //               </div>
      //               <div style={{display:'block',width:'15%',textAlign:'center',margin:'0 auto'}}>
      //                 <h2>{item.title}</h2>
      //                 <p>{item.detail}</p>
      //                 <h3>${item.price}</h3>
      //                 {count===0 ? 
      //                 <ItemCount OnAdd={handleOnAdd} stock={item.stock}/>
      //                 : 
      //                 <Link to='/cart'>Ver el carrito</Link>
      //                 }
      //               </div>
      //           </ContainerItemDetail>
      //   )
      // }
      // else{
      //   return(
        
      //   )
      // }
}

export default ItemDetailContainer