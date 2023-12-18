import { useEffect } from "react";

const Card=({name,age,add})=>{   
    useEffect(()=>{
        console.log("called")
    })
   return(
    <div >
        <div>{name}</div>
        <div>{age}</div>
        <div>{add}</div>
    </div>
   )
}
export default Card;