import Header from "./Components/Header";
import Meals from "./Meals/Meals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Singlemeal from "./Meals/singlemeal";
import Home from "./Home";
import Footer from "./Components/Footer";

function App() {
  // console.log(meals);

  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/meals" element={<Meals />} />
          <Route path="/:name" element={<Singlemeal />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
