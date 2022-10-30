import React, { useState, useEffect  } from "react";
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import vector2 from '../asset/vector2.png'

export default function EditPost() {

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


const onInputChange = e => {

  setPost({...post, [e.target.name] : e.target.value});

}


const onSubmit = async e => {
        
  e.preventDefault();
  await axios.put('http://localhost:8000/post/update/' + id , post).then(() => {
      alert("attendance updated successfully");
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
                    <label for="formGroupExampleInput">Location</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                    name="location"
                    defaultValue={location}
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="name"
                     defaultValue={name}
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">Contact</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="contact"
                     defaultValue={contact}
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

