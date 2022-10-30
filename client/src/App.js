import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import EditPost from './components/EditPost';
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';
import Header from './Header/Header'
import Footer from './footer/footer'

export default class App extends Component {
  render() {
    return (
        <Router>
          <Header/>
                 <Routes>  
                    <Route path="/" element = {<Home/>}/>
                    <Route path="/edit/:id" element = {<EditPost/>}/>
                    <Route path="/add" element = {<CreatePost/>}/>
                    <Route path="/post/:id" element = {<PostDetails/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
  }
}


