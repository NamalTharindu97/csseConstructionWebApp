import React, { useState } from "react";
import axios from 'axios';
import './style.css'
import vector01 from '../../asset/vector01.png' 

export default function CreatePost() {

//useage of react hooks design pattern
 //this useState use for set item detail
  const [post, setPost] = useState({ 

    itemName: "",
    unitPrice: ""

});

//handle change for set values for  variables
const onInputChange = e => {

  setPost({...post, [e.target.name] : e.target.value});

}



const onSubmit = async e => {
     //save details for database using axios post method     
  e.preventDefault();
  await axios.post('/item/save' , post).then(() => {
      alert("Item Details Successfully Added");
  }).catch((err) => {
      alert(err);
  })
   
}

  return (
    <>
    <div>
    <div className="form">
      
    <form  className="Addform" >
    <h2>Item ADD</h2>
                  <div class="form-group">
                    <label for="formGroupExampleInput">itemName</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="itemName"
                    name="itemName"
                    onChange={ e => onInputChange(e)}   //Controlled Components design pattern usage
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">unitPrice</label>
                    <input type="Number" class="form-control" id="formGroupExampleInput2" placeholder="unitPrice"
                     name="unitPrice"
                    onChange={ e => onInputChange(e)}     //Controlled Components design pattern usage
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

