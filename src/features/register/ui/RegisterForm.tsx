import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../api/register.api";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setUserData } from "@/features";
import { Button, Input } from "@/shared/components";
import styles from "./RegisterForm.module.scss";

function RegisterForm() {
  const { name, email, password, repeatPassword } = useAppSelector(
    (state) => state.userSlice.user
  );
  const dispatch = useAppDispatch();
  const [registerUser] = useRegisterMutation();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: field, value } = event.target;
    dispatch(
      setUserData({ name, email, password, repeatPassword, [field]: value })
    );
    if (error && (field === "password" || field === "repeatPassword")) {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    registerUser({ email, password, name })
      .unwrap()
      .then((data) => {
        localStorage.setItem("jwt_token", data.token);
        console.log(data);
        navigate("/");
      })
      .catch((err) => {
        setError(
          "Ошибка регистрации: " + (err.data?.message || "Попробуйте снова")
        );
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.box}>
        <h2>Регистрация</h2>

        <div className={styles.form__container}>
          <Input
            label="Имя пользователя"
            id="name"
            type="text"
            placeholder="Введите ваше имя"
            name="name"
            value={name}
            onChange={onChange}
            className={styles.input}
          />

          <Input
            label="Почта"
            id="email"
            type="email"
            name="email"
            placeholder="Введите вашу почту"
            value={email}
            onChange={onChange}
            className={styles.input}
          />

          <Input
            id="password"
            label="Пароль"
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={password}
            onChange={onChange}
            className={styles.input}
          />

          <Input
            label="Повторите пароль"
            id="repeatPassword"
            type="password"
            name="repeatPassword"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={onChange}
            className={styles.input}
          />
        </div>

        <Button type="submit">Зарегистрироваться</Button>

        <div className={styles.loginLink}>
          <p>
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
