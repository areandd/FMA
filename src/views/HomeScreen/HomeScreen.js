import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ScrollingStocks from "../../components/ScrollingStocks/ScrollingStocks";
import Markets from "../../components/Markets/Markets";
import Post from "../../components/Post/Post";
import Watchlist from "../../components/Watchlist/Watchlist";

function HomeScreen() {
  return (
    <>
      <NavBar />
      <ScrollingStocks />
      <Markets />
      <div className="posts__watchlist__wrapper">
        <div className="posts__wrapper">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="watchlist__wrapper">
          <Watchlist />
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
