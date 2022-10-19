import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./views/HomeScreen/HomeScreen";
import IndividualStocks from "./views/IndividualStocks/IndividualStocks";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import Signup from "./views/Signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />}/>
      <Route path="/individual-stocks" element={<IndividualStocks />}/>
      <Route path="/profile-page" element={<ProfilePage />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  );
}

export default App;
