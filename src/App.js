import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilterBar from "./components/Filter/FilterBar";
function App() {
  return (
    <div className="container">
      <Header />
      <Footer />
      <FilterBar />
    </div>
  );
}

export default App;
