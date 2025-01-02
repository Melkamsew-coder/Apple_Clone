// export default App;
import React from "react";
//Import CSS Files Globally instead of importing for each component
import "./commonResource/css/bootstrap.css"; // Bootstrap CSS
import "./commonResource/css/styles.css"; // Custom global styles
// import "./App.css";
import Header from "./Components/Header/Header";
import AlertSection from "./Components/Main/AlertSection";
import FirstHighlight from "./Components/Main/FirstHighlight";
import SecondHighlight from "./Components/Main/SecondHighlight";
import ThirdHighlight from "./Components/Main/ThirdHighlight";
import FourthHighlight from "./Components/Main/FourthHighlight";
import FifthHighlight from "./Components/Main/FifthHighlight";
import SixthHighlight from "./Components/Main/SixthHighlight";
import Footer from "./Components/Footer/Footer";

//Rendering  each individual functional components ...//*
function App() {
  return (
    <div className="App">
      <AlertSection />
      <Header />
      <FirstHighlight />
      <SecondHighlight />
      <ThirdHighlight />
      <FourthHighlight />
      <FifthHighlight />
      <SixthHighlight />
      <Footer />
    </div>
  );
}
//Then React takes care of rendering them to the DOM in the correct order!!! NO need to worry :)
export default App;
