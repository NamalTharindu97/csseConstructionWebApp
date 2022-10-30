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
    <>
    <div className="single_view">
      <div className="container1">
        <label>Location   :</label>   <text> {location}</text><br />
        <label>Name: </label>   <text>{name}     </text><br />
        <label>Contact: </label>   <text>{contact}  </text><br />
        
      </div><div className="container2">
          <label>Supplier </label>   <text> Hansaka</text><br /><br/>
          <label><span>Items </span></label>   <text><span>Qty</span></text><br />
          <label>Item 1 </label>   <text>02 </text><br />
          <label>Item 2 </label>   <text>02  </text><br />
          <label>Item 3 </label>   <text>02  </text><br /><br/>
          <label><span1>Total Amount</span1> </label>   <text><span1>Rs.10000.00</span1>  </text><br />
        </div>
        
      </div>
          <div className="btnClass">
            <button type="submit" className="button1">Approval</button>
            <button type="submit" className="button1">Partial Approval</button>
          </div>
      </>
    
  )
}




