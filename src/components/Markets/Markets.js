import React from "react";
import BarChart from "../BarChart";
import "./Markets.css";
import {} from "./"


function Markets() {

  const [userData, setUserData] = useState();
  return (
    <div>
      <div class="markets">
        <div className="market">
          <BarChart chartData={}/>
        </div>
        <div className="market">
          <h1>NASDAQ</h1>
        </div>
        <div className="market">
          <h1>Dow Jones</h1>
        </div>
      </div>
    </div>
  );
}

export default Markets;
