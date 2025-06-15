import "../Form/form.css";
import React, { useState } from "react";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState<string>();

  function handleClick() {
    if (name && number) {
      fetch("https://autoaudioshop.ru/api/order.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputnumber: number,
          inputname: name,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((err) => {
              throw new Error(err.error || "Ошибка сервера");
            });
          }
          return response.json();
        })
        .then((data) => {
          console.log("Ответ от сервера:", data);
          alert("Заявка отправлена!");
        })
        .catch(() => {
          alert("Ошибка при отправке заявки");
        });
    } else {
      alert("Заполните все поля!");
    }
  }

  return (
    <div className="form" id="form">
      <div className="form_icon">
        <div className="form_icon-text">
          <h1>ОСТАВЬТЕ ЗАЯВКУ</h1>
          <a>И МЫ С ВАМИ СВЯЖЕМСЯ</a>
        </div>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="ВВЕДИТЕ ИМЯ"
        ></input>
        <input
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          placeholder="ВВЕДИТЕ НОМЕР"
        ></input>
        <button onClick={() => handleClick()}>ОТПРАВИТЬ</button>
      </div>
    </div>
  );
};

export default Form;
