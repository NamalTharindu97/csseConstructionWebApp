import React, { useState } from "react";
import axios from 'axios';

export default function CreatePost() {

  const [post, setPost] = useState({   

    location: "",
    name: "",
    contact : ""

});


const onInputChange = e => {

  setPost({...post, [e.target.name] : e.target.value});

}



const onSubmit = async e => {
        
  e.preventDefault();
  await axios.post('http://localhost:8000/post/save' , post).then(() => {
      alert("attendance updated successfully");
  }).catch((err) => {
      alert(err);
  })
   
}

  
  return (
    <div>
    <div>
    <form style={{width : '50%' , padding : 100}}>

                  <div class="form-group">
                    <label for="formGroupExampleInput">location</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                    name="location"
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="name"
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput2">contact</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                     name="contact"
                    onChange={ e => onInputChange(e)}
                    />
                  </div>

                  <div class="col-auto my-1">
                  <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
                  </div>

    </form>
    </div>
</div>
  )
}

