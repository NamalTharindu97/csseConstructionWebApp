import React, { Component } from 'react';
import axios from 'axios';
import './style.css'

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts : []
        };
    }

    componentDidMount(){
        this.retrievePost();
    }

    retrievePost(){
        axios.get('/supliers/').then(res => {
            if(res.data.success){
                this.setState({
                    posts : res.data.existingPosts
                })
            }
        })
    }

   onDelete = (id) => {
        axios.delete("/supliers/delete/"+ id)
            .then((res) => {
                alert('Sites Details Successfully Deleted')
                this.retrievePost();
                window.location.reload(true)//reload page
    
            })
    
    }


  render() {
    return (
      <div className='container'>
        <h3 className='headtxt'>Supplier List</h3>
            <table className='table'>
            {/* table head */}
                    <thead>
                            <tr>
                                <th scope='col'>No</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Address</th>
                                <th scope='col'>Contact</th>
                                <th scope='col'>Action</th>
                            </tr>
                    </thead>
                {/* table body */}
                    <tbody>
                            {this.state.posts.map((posts,index) => (
                                <tr key={index}>
                                    <th scope='row'>{index+1}</th>

                                    <td>
                                    <a href={`/item/${posts._id}` }   style = {{textDecoration : 'none'}} >
                                           {posts.name}
                                    </a>
                                    </td>
                                    <td>{posts.address}</td>
                                    <td>{posts.contact}</td>
                                    <td>

                                            <a className='btn btn-warning' href={`/supplier/edit/${posts._id}` }  >
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

            <button className='btn btn-success'><a href='/suplier/add'  style={{textDecoration: "none" , color : "white"}}>Create New Supplier</a></button>

      </div>
    )
  }
}