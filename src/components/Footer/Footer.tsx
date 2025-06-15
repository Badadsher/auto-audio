import "../Footer/footer.css";
import React from "react";
import telegram from "../../assets/img/telegram.png";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a>КОНТАКТЫ</a>
      <p>+7 906 038 4775</p>
      <a href="https://t.me/Your_dreammm_m">
        <img src={telegram}></img>
      </a>
    </div>
  );
};

export default Footer;
