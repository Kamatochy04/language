import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setUserData } from "@/features";
import { Button, Input } from "@/shared/components";
import styles from "./loginForm.module.scss";

function LoginForm() {
  const { username, password, repeatPassword } = useAppSelector(
    (state) => state.userSlice.user
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: field, value } = event.target;
    dispatch(
      setUserData({ username, password, repeatPassword, [field]: value })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/information");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.box}>
        <h2>Вход</h2>

        <div className={styles.form__container}>
          <Input
            label="Имя пользователя"
            id="name"
            type="text"
            placeholder="Введите ваше имя"
            name="name"
            value={username}
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
        </div>

        <Button type="submit">Войти</Button>

        <div className={styles.loginLink}>
          <p>
            Еще не зарегистрированы? <Link to="/register">Создать аккаунт</Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
