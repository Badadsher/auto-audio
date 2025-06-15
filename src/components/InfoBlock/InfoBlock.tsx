import delivery from "../../assets/img/delivery.png";
import sort from "../../assets/img/sort.png";
import support from "../../assets/img/support.png";
import reduce from "../../assets/img/reduce.png";
import "../InfoBlock/infoblock.css";
const InfoBlock: React.FC = () => {
  return (
    <div className="infoblock">
      <div className="infoblock_top">
        <img src={support}></img>
        <a>ПОДДЕРЖКА 24/7</a>
      </div>
      <div className="infoblock_down">
        <div className="infoblock_down-item">
          <img src={sort}></img>
          <a className="sort-pc">БОЛЬШОЙ АССОРТИМЕНТ</a>
          <a className="sort-mobile">
            БОЛЬШОЙ <br /> АССОРТИМЕНТ
          </a>
        </div>
        <div className="infoblock_down-item">
          <img src={reduce}></img>
          <a>СКИДКА НА ПЕРВЫЙ ЗАКАЗ</a>
        </div>
        <div id="third-item" className="infoblock_down-item">
          <img src={delivery}></img>
          <a>ДОСТАВКА В ПРЕДЕЛАХ МКАД</a>
        </div>
      </div>
      <div id="third-item-mobile" className="infoblock_down-item">
        <img src={delivery}></img>
        <a>ДОСТАВКА В ПРЕДЕЛАХ МКАД</a>
      </div>
    </div>
  );
};

export default InfoBlock;
