import "../SectionMain/sectionmain.css";
import Magnitola from "../../assets/img/magnitola2test.png";
const SectionsMain: React.FC = () => {
  return (
    <div className="sectionmain" id="sectionMain">
      <div className="sectionmain_main">
        <div className="sectionmain_main-leftblock">
          <h1>
            Дистрибьютор <br /> автомагнитол и автозвука
          </h1>
          <a>AUTOAUDIO SHOP</a>
          <p>
            ШИРОКИЙ АССОРТИМЕНТ, <br /> ДОСТУПНЫЕ ЦЕНЫ
          </p>
        </div>
      </div>
      <div className="sectionmain_main-rightblock">
        <img src={Magnitola}></img>
      </div>
    </div>
  );
};

export default SectionsMain;
