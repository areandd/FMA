import React, {useState} from "react";
import Nasdaq from "../Nasdaq";
import "./Markets.css";
import {UserData} from "./Data";


function Markets() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),

    }]
  });
  return (
    <div>
      <div class="markets">
        <div className="market">
          <Nasdaq chartData={userData}/>
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
