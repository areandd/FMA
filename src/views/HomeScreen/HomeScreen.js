import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ScrollingStocks from "../../components/ScrollingStocks/ScrollingStocks";
import Markets from "../../components/Markets/Markets";
import Post from "../../components/Post/Post";
import Watchlist from "../../components/Watchlist/Watchlist";

function HomeScreen() {
  return (
    <div>
      <NavBar />
      <ScrollingStocks />
      <Markets />
      
      <div className="data-and-post-container">
        <div className="home-posts-container">
          <h1 className="posts-header">Posts</h1>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="data-tables">
          <Watchlist />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
