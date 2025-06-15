import React from "react";
import magazine from "../../assets/img/magazine.png";
import "./magazine.css";
const Magazine: React.FC = () => {
  return (
    <div className="magazine">
      <div>
        <h1>КАТАЛОГ ПРОДУКЦИИ</h1>
        <img id="magazine-mobile" src={magazine}></img>
        <button
          onClick={() => window.open("https://t.me/Your_dreammm_m", "_blank")}
        >
          НАПИСАТЬ МЕНЕДЖЕРУ ДЛЯ ПОЛУЧЕНИЯ
        </button>
      </div>
      <img id="magazine-pc" src={magazine}></img>
    </div>
  );
};

export default Magazine;
