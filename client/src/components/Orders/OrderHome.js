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
    //use for get item data from the database
    componentDidMount(){
        this.retrievePost();
    }
    //use for delete data from the
    retrievePost(){
        axios.get('/orders/').then(res => {
            if(res.data.success){
                this.setState({
                    posts : res.data.existingPosts
                })
            }
        })
    }

   onDelete = (id) => {
        axios.delete("/orders/delete/"+ id)
            .then((res) => {
                alert('orders Details Successfully Deleted')
                this.retrievePost();
                window.location.reload(true)//reload page
    
            })
    
    }


  render() {
    return (
      <div className='container'>
        <h3 className='headtxt'>Order List</h3>
            <table className='table'>
            {/* table head */}
                    <thead>
                            <tr>
                                <th scope='col'>No</th>
                                <th scope='col'>Site</th>
                                <th scope='col'>Item</th>
                                <th scope='col'>Supplier</th>
                            </tr>
                    </thead>
                {/* table body */}
                    <tbody>
                            {this.state.posts.map((posts,index) => (
                                <tr key={index}>
                                    <th scope='row'>{index+1}</th>

                                    <td>
                                    <a href={`/order/${posts._id}` }   style = {{textDecoration : 'none'}} >
                                           {posts.site}
                                    </a>
                                    </td>
                                    <td>{posts.item}</td>
                                    <td>{posts.supplier}</td>
                                    <td>

                                            <a className='btn btn-warning' href={`/order/edit/${posts._id}` }  >
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

            <button className='btn btn-success'><a href='/order/add'  style={{textDecoration: "none" , color : "white"}}>Create New Order</a></button>

      </div>
    )
  }
}