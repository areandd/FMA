import React from "react";
import "./HomeScreen.css";
import NavBar from "../../components/NavBar/NavBar";
import ScrollingStocks from "../../components/ScrollingStocks/ScrollingStocks";

function HomeScreen() {
  return (
    <div className="wrapper">
      <NavBar />
      <ScrollingStocks />
      <div className="market__wrapper">
        <div className="market">market</div>
        <div className="market">market</div>
        <div className="market">market</div>
      </div>

      <div className="social__watchlistWrapper">
        <div className="social__posts">
          <div className="post">
            post
            <div className="post__account">account</div>
            <div className="post__content">content</div>
          </div>
        </div>

        <div className="watchlist">
          <div className="stock">
            stock
            <div className="stock__ticker">ticker</div>
            <div className="stock__price">price</div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default HomeScreen;
