import Logo from "../../assets/img/logo.png";
import telegram from "../../assets/img/telegram.png";
import "../Header/header.css";
function Header() {
  return (
    <div className="header">
      <div className="header_info">
        <img className="header_info-logo" src={Logo}></img>

        <div className="header_info-main">
          <a href="/#form">ОСТАВИТЬ ЗАЯВКУ</a>
          <a href="/#video">ВИДЕО ОБЗОР</a>
        </div>

        <div className="header_info-phone">
          <div className="header_info-phone_infos">
            <a>+7 906 038 4775</a>
            <a href="https://t.me/Your_dreammm_m">
              <img src={telegram}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
