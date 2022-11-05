import React, { useState } from "react";
import axios from 'axios';
import './style.css'
import vector01 from '../../asset/vector01.png' 

export default function CreatePost() {
//useage of react hooks design pattern
 //this useState use for set detail
  const [post, setPost] = useState({ 

    name: "",
    address: "",
    contact: ""

});

//handle change for set values for  variables
const onInputChange = e => {

  setPost({...post, [e.target.name] : e.target.value});

}



const onSubmit = async e => {
     //save details for database using axios post method   
  e.preventDefault();
  await axios.post('/supliers/save' , post).then(() => {
      alert("Suppier Details Successfully Added");
  }).catch((err) => {
      alert(err);
  })
   
}

  
  return (
    <>
    <div>
    <div className="form">
      
    <form  className="Addform" >
    <h2>Supplier ADD</h2>
                  <div class="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                    name="name"
                    onChange={ e => onInputChange(e)} //Controlled Components design pattern usage
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">Address</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="address"
                    onChange={ e => onInputChange(e)}  //Controlled Components design pattern usage
                    />
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Contact</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="contact"
                    onChange={ e => onInputChange(e)}  //Controlled Components design pattern usage
                    />
                  </div>
  <div>
                  <button type="submit" className="button"  onClick={onSubmit}>Add</button>
                  </div>

    </form>
    <div className="vector01">
      <img src={vector01} width="500px"></img>
    </div>

    </div>
</div>
</>
  )
}

