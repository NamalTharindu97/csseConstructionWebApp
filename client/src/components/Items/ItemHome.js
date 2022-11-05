import React, { Component } from 'react';
import axios from 'axios';
import './style.css'

export default class Home extends Component {
    //Render Props design patter usage
    constructor(props){
        super(props);
        this.state = {
            posts : []
        };
    }

    componentDidMount(){
        this.retrievePost();
    }
    //use for get item data from the database
    retrievePost(){
        axios.get('/items/').then(res => {
            if(res.data.success){
                this.setState({
                    posts : res.data.existingPosts
                })
            }
        })
    }
    //use for delete data from the
   onDelete = (id) => {
        axios.delete("/item/delete/"+ id)
            .then((res) => {
                alert('Sites Details Successfully Deleted')
                this.retrievePost();
                window.location.reload(true)//reload page
    
            })
    
    }


  render() {
    return (
      <div className='container'>
        <h3 className='headtxt'>Item List</h3>
            <table className='table'>
            {/* table head */}
                    <thead>
                            <tr>
                                <th scope='col'>No</th>
                                <th scope='col'>itemName</th>
                                <th scope='col'>unitPrice</th>
                            </tr>
                    </thead>
                {/* table body */}
                    <tbody>
                            {this.state.posts.map((posts,index) => (
                                <tr key={index}>
                                    <th scope='row'>{index+1}</th>

                                    <td>
                                    <a href={`/item/${posts._id}` }   style = {{textDecoration : 'none'}} >
                                           {posts.itemName}
                                    </a>
                                    </td>
                                    <td>{posts.unitPrice}</td>
                                    <td>

                                            <a className='btn btn-warning' href={`/item/edit/${posts._id}` }  >
                                                    <i className='fas fa-edit'></i>&nbsp;Edit
                                            </a>
                                            &nbsp;
                                            <a className='btn btn-danger' onClick={ () => this.onDelete(posts._id)  } >
                                                    <i className='fas fa-trash-alt'></i>&nbsp;Delete
                                            </a>

                                    </td>
                                </tr>
                            ))}

                    </tbody>
            </table>

            <button className='btn btn-success'><a href='/item/add'  style={{textDecoration: "none" , color : "white"}}>Create New Item</a></button>

      </div>
    )
  }
}