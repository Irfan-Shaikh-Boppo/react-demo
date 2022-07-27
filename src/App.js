import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header name="DEMO" isLoggedIn={true} />
      <Home isLoggedIn={true}/>
      <Footer />
    </div>
  );
}

export default App;
