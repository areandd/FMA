import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ScrollingStocks from "../../components/ScrollingStocks/ScrollingStocks";
import Post from "../../components/Post/Post";

function HomeScreen() {
  return (
    <>
      <NavBar />
      <ScrollingStocks />
      
      <Post />
      
    </>
  );
}

export default HomeScreen;
