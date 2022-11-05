import React, { useState, useEffect  } from "react";
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import vector2 from '../../asset/vector2.png'

export default function EditPost() {

  const {id} = useParams();

  const [post, setPost] = useState({   

    itemName: "",
    unitPrice: ""

});
  const { itemName, unitPrice } = post;

  useEffect(()=>{
    getEvents();
},[])


  function getEvents() {
          axios.get("http://localhost:8000/item/" + id ).then((res) => {
            if(res.data.success){

              setPost(res.data.post);
  
            }
          });
          console.log(post)
  }


const onInputChange = e => {

  setPost({...post, [e.target.name] : e.target.value});

}


const onSubmit = async e => {
        
  e.preventDefault();
  await axios.put('http://localhost:8000/item/update/' + id , post).then(() => {
      alert("Item Details Successfully Updated");
      window.location.reload(true)//reload page
  }).catch((err) => {
      alert(err);
  })
   
}

  return (
    <div >


              <div>
    <form className="Addform">

    <h2>Update Requisition List</h2>
                  <div class="form-group">
                    <label for="formGroupExampleInput">itemName</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                    name="itemName"
                    defaultValue={itemName}
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">unitPrice</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="unitPrice"
                     defaultValue={unitPrice}
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

