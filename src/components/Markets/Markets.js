import React, {useState} from "react";
import Nasdaq from "./Nasdaq/Nasdaq";
import "./Markets.css";
import {NasdaqData} from "./Nasdaq/NasdaqData";


function Markets() {

  const [userData, setUserData] = useState({
    labels: NasdaqData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: NasdaqData.map((data) => data.userGain),

    }]
  });
  return (
    <div>
      <div class="markets">
        <div className="market">
          <Nasdaq chartData={userData}/>
        </div>
        <div className="market">
          <Nasdaq chartData={userData}/>
        </div>
        <div className="market">
          <Nasdaq chartData={userData}/>
        </div>
      </div>
    </div>
  );
}

export default Markets;
