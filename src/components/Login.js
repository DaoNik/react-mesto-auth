import React from "react";

export default function Login() {
  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
      <form>
        <input className="login__input" placeholder="Email"></input>
        <input className="login__input" placeholder="Пароль"></input>
        <button className="login__submit" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}
