import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Register() {
  return (
    <>
      <Header link="/react-mesto-auth/sign-in" text="Войти" />
      <section className="login">
        <h2 className="login__title">Регистрация</h2>
        <form>
          <input className="login__input" placeholder="Email"></input>
          <input className="login__input" placeholder="Пароль"></input>
          <button className="login__submit" type="submit">
            Зарегистрироваться
          </button>
          <Link to="/react-mesto-auth/sign-in" className="login__link">
            Уже зарегистрированы? Войти
          </Link>
        </form>
      </section>
    </>
  );
}
