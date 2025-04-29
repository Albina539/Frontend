import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/posts">Перейти на страницу</Link>
      Главная страница
      <Link to="/about">Активная страница</Link>
    </div>
  );
};

export default Home;
