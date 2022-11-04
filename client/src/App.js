import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Sites/Home';
import EditPost from './components/Sites/EditPost';
import CreatePost from './components/Sites/CreatePost';
import PostDetails from './components/Sites/PostDetails';
import ItemHome from './components/Items/ItemHome';
import CreateItem from './components/Items/CreateItem';
import ItemDetails from './components/Items/ItemDetails';
import EditItems from './components/Items/EditItems';
import Header from './Header/Header'
import Footer from './footer/footer'

export default class App extends Component {
  render() {
    return (
        <Router>
          <Header/>
                 <Routes>  
                    <Route path="/" element = {<Home/>}/>
                    <Route path="/ItemHome" element = {<ItemHome/>}/>
                    <Route path="/edit/:id" element = {<EditPost/>}/>
                    <Route path="/add" element = {<CreatePost/>}/>
                    <Route path="/post/:id" element = {<PostDetails/>}/>
                    <Route path='/item/add' element = {<CreateItem/>}/>
                    <Route path='/item/:id' element = {<ItemDetails/>}/>
                    <Route path='/item/edit/:id' element = {<EditItems/>}/>

            </Routes>
            <Footer/>
        </Router>
    )
  }
}


