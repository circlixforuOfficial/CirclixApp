import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import UserAccess from './pages/UserAccess';
import UserPage from './pages/UserPage';
import BidsForMePage from './pages/BidsForMe';
import BidPage from './pages/BidPage';
import ExplorePage from './pages/ExplorePage';
import ItemFullDetail from './pages/ItemFullDetail';
import MyPosts from './pages/MyPosts';


function App() {

  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserAccess />} />
          <Route path="/user/:token" element={<UserPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/bidsforme" element={<BidsForMePage />} />
          <Route path="/bids" element={<BidPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/details" element={<ItemFullDetail />} />
          <Route path="/details/:id/:type" element={<ItemFullDetail />} />
          <Route path="/myposts" element={<MyPosts />} />
        </Routes>
      </div>
    </Router>

    </>
  )
}

export default App;