import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
const Post = () => {
    const [data,setData] = useState([]);
    const [load,setLoad] = useState(true);
    useEffect(()=>{
        if (load===true){<h2>Loading...</h2>}
        const fetchData=async()=>{
            try {
                const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
                console.log(response);
                setLoad(false);
                setData(response.data);
            } catch (error) {
                
            }
        }
        fetchData();
    },[]);
  return (
    
    <div>
        <h1>fetch Data from API and show the data</h1>
        <ul>
            {data.slice(0,10).map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Post