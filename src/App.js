import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Meals from "./Meals/Meals";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Singlemeal from "./Meals/singlemeal";
import Home from "./Home";
import Footer from "./Components/Footer";

function App() {
  const [meals, setMeals] = useState([]);

  const APIURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=b";

  useEffect(() => {
    const fetchMeals = async () => {
      const foods = await axios.get(APIURL);
      const data = foods.data.meals;
      setMeals(data);
    };
    fetchMeals();
  }, [APIURL]);
  // console.log(meals);

  return (
    <Router>
      <>
        <Header />
     
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/meals" element={<Meals meals={meals} />} />
        <Route path="/:name" element={<Singlemeal />} />
      </Routes>

      <Footer />
      </>
    </Router>
  );
}

export default App;
