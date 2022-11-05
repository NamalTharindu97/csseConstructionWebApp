import React, { useState, useEffect  } from "react";
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import vector2 from '../../asset/vector2.png'

export default function EditOrder() {

  const {id} = useParams();  //for get item_id from the address
  const [post, setPost] = useState({       //set updated item details for variables

    site: "",
    item: "",
    supplier: ""

});
  const { site, item, supplier } = post;
  //set updated item details for variables
  useEffect(()=>{
    getEvents();
},[])

//handlechange for set values
  function getEvents() {
          axios.get("http://localhost:8000/order/" + id ).then((res) => {
            if(res.data.success){

              setPost(res.data.post);
  
            }
          });
          console.log(post)
  }

//handlechange for set values
const onInputChange = e => {

  setPost({...post, [e.target.name] : e.target.value});

}


const onSubmit = async e => {
  //use axios put methos with id for update relavent detail 
  e.preventDefault();
  await axios.put('http://localhost:8000/order/update/' + id , post).then(() => {
      alert("Order Details Successfully Updated");
      window.location.reload(true)//reload page
  }).catch((err) => {
      alert(err);
  })
   
}

  return (
    <div >


              <div>
    <form className="Addform">

    <h2>Update Order List</h2>
                  <div class="form-group">
                    <label for="formGroupExampleInput">Site</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                    name="site"
                    defaultValue={site}
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">Item</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="item"
                     defaultValue={item}
                    onChange={ e => onInputChange(e)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">supplier</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="supplier"
                     defaultValue={supplier}
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="col-auto my-1">
                  <button type="submit" className="button" onClick={onSubmit}>Update</button>
                  </div>

    </form>
    <div className="vector01">
      <img src={vector2} width="500px"></img>
    </div>
    </div>
    </div>
  )
}

