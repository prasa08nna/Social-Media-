import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {
  
  let [selectedTab,setSelectedTab]=useState("CreatePost");

  return (
    
    <PostListProvider>
    <div className="myApp">
    <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
    <div className="content">
    <Header></Header>
    {selectedTab==="Home"?<PostList/>:<CreatePost/>}
    <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
   
    
  )
}

export default App
