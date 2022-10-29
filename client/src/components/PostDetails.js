import React, { useState, useEffect  } from "react";
import axios from 'axios';
import {  useParams } from 'react-router-dom';

export default function PostDetails() {
  
  const {id} = useParams();

  const [post, setPost] = useState({   

    location: "",
    name: "",
    contact : ""

});
  const { location, name, contact } = post;

  useEffect(()=>{
    getEvents();
},[])


  function getEvents() {
          axios.get("http://localhost:8000/post/" + id ).then((res) => {
            if(res.data.success){

              setPost(res.data.post);
  
            }
          });
          console.log(post)
  }


  return (
    <div >
              <text>Location  :     {location}</text> <br/>
              <text>Name  :     {name}</text><br/>
              <text>Contact  :     {contact}</text><br/>
    </div>
  )
}




