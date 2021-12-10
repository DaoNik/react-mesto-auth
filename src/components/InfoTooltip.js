import React from "react";
import union from "../images/Union.svg";
import cross from "../images/cross.svg";

export default function InfoTooltip({ isOpen, onClose }) {
  return (
    <div className={`popup popup_info ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <img className="popup__info-image" src={union} alt="Галочка успеха" />
        <h2 className="popup__title popup__title_info">
          Вы успешно зарегистрировались!
        </h2>
        <button
          onClick={onClose}
          type="button"
          className="popup__btn-closed"
          aria-label="Кнопка закрытия всплывающего окна"
        ></button>
      </div>
    </div>
  );
}
