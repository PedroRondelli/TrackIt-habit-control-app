import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import logo from "./loginImage.png";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function login(e) {
    e.preventDefault();
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      form
    );
    promise.catch(()=> alert(form.email))
  }

  return (
    <LoginScreen>
      <div>
        <img src={logo} alt="TrackIt" />
        <form onSubmit={login}>
          <input
            type="email"
            required
            placeholder="email"
            name="email"
            onChange={handleForm}
            value={form.email}
          />
          <input
            type="password"
            required
            placeholder="senha"
            name="password"
            onChange={handleForm}
            value={form.password}
          />
          <button type="submit">Entrar</button>
        </form>
        <p>Não tem uma conta? Cadastre-se!</p>
      </div>
    </LoginScreen>
  );
}

const LoginScreen = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 90%;
    height: 85vh;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 100%;
    height: 45px;
    margin: 5px 0;

    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;

    ::placeholder {
      font-family: "Lexend Deca", sans-serif;
      font-size: 19.98px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      color: #c4bebe;
    }
  }
  button {
    padding: 5px;

    font-family: Lexend Deca;
    font-size: 21px;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;

    width: 100%;

    background-color: #52b6ff;

    color: white;

    border-radius: 5px;
  }
  p {
    color: #52b6ff;
    text-decoration-line: underline;
    font-family: Lexend Deca;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0em;

    cursor: pointer;
  }
  img {
    margin-bottom: 40px;
  }

  form {
    margin-bottom: 20px;
  }
`;