import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="home">
      <h1>Главная страница</h1>
      <div className="text">
        <p>Выберите ссылку с заданием</p>
        <Link to="/calculator">Калькулятор</Link>
        <Link to="/info">Информационный массив</Link>
      </div>
    </div>
  );
};

export default Main;
