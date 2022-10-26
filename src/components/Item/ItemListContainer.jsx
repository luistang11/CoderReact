import ItemList from "./ItemList";
import{useParams} from 'react-router-dom';
import React,{useEffect,useState} from 'react'
import {getItem,getItemByCategory} from "../../services/firebase.js"
import Loader from "../loader/Loader";


export default function ItemListContainer(props){
    const [coursesList,setCoursesList] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const {categoryID}=useParams();
    useEffect(() => {
        setCoursesList([])
        if (categoryID ===undefined) {
            getItem().then(
            (data)=>{
                setCoursesList(data);
                setIsLoading(false)
            })
        }
        else{
            getItemByCategory(categoryID).then((data)=>{
                setCoursesList(data);
            })
        }
    },[categoryID])

    return(
        <div>
            {
                isLoading ?
                <Loader/>
                :
                <ItemList coursesList={coursesList}/>
            }
            
        </div>
    );
};
