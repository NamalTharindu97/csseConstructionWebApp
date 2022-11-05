import React, { useState } from "react";
import axios from 'axios';
import './style.css'
import vector01 from '../../asset/vector01.png' 

export default function CreatePost() {

  const [post, setPost] = useState({ 

    name: "",
    address: "",
    contact: ""

});


const onInputChange = e => {

  setPost({...post, [e.target.name] : e.target.value});

}



const onSubmit = async e => {
        
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
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"
                    name="name"
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">Address</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Address"
                     name="address"
                    onChange={ e => onInputChange(e)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Contact</label>
                    <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="contact"
                    onChange={ e => onInputChange(e)}
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

