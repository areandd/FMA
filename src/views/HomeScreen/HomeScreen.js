import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ScrollingStocks from "../../components/ScrollingStocks/ScrollingStocks";
import Markets from "../../components/Markets/Markets";
import Post from "../../components/Post/Post";

function HomeScreen() {
  return (
    <>
      <NavBar />
      <ScrollingStocks />
      <Markets />
      <div className="posts__wrapper">
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}

export default HomeScreen;
