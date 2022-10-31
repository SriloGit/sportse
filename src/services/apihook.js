import { useEffect, useState } from "react"
import axios from "axios";
import datas from "../data/dataNew";


const baseURL = "http://localhost:3000/user/";


function ApiHook(id){

const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL + id).then((response) => {
      setPost(response.data);
      
    });    
  }, [id]);

  return post
}
export default ApiHook