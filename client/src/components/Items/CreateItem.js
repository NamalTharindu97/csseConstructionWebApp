import React, { useState } from "react";
import axios from 'axios';
import './style.css'
import vector01 from '../../asset/vector01.png' 

export default function CreatePost() {

  const [post, setPost] = useState({ 

    itemName: "",
    unitPrice: ""

});


const onInputChange = e => {

  setPost({...post, [e.target.name] : e.target.value});

}



const onSubmit = async e => {
        
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
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                    name="itemName"
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">unitPrice</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="unitPrice"
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

