import React from "react";
import "./Home.css";
import Projects from "./sections/Projects";
import Card from "../../components/Card";
const Home = () => {
  return (
    <div className="container">
      <section className="img-sec">
        <span className="black-span">BR</span>
        <span>Architects</span>
      </section>
      <Projects />
      <Card />
    </div>
  );
};

export default Home;
