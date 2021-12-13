export const BASE_URL = "https://auth.nomoreparties.co";

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);

        return data;
      }
    })
    .catch((err) => {
      if (err === "400") {
        console.log("не передано одно из полей");
      } else if (err === "401") {
        console.log("пользователь с email не найден");
      } else {
        console.log(`Ошибка: ${err}`);
      }
    });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      if (err === "400") {
        console.log("Токен не передан или передан не в том формате");
      } else if (err === "401") {
        console.log("Переданный токен некорректен");
      } else {
        console.log(`Ошибка: ${err}`);
      }
    });
};
