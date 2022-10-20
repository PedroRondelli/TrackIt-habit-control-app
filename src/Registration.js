import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import logo from "./loginImage.png";

export default function Registration() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function registration(e) {
    e.preventDefault();
    setLoading(true)
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      form
    );
    promise.then(() => setLoading(false));
    promise.catch(() => alert("não funcionou"));
  }

  return (
    <RegistrationScreen>
      <main>
        <img src={logo} alt="TrackIt" />
        <form onSubmit={registration}>
          <input
            required
            type="email"
            onChange={handleForm}
            value={form.email}
            name="email"
            placeholder="email"
          />
          <input
            required
            type="password"
            onChange={handleForm}
            value={form.password}
            name="password"
            placeholder="senha"
          />
          <input
            required
            onChange={handleForm}
            value={form.name}
            name="name"
            placeholder="nome"
          />
          <input
            type="url"
            required
            onChange={handleForm}
            value={form.image}
            name="image"
            placeholder="foto"
          />
          <button type="submit">{isLoading ? <Loading /> : "Cadastrar" }</button>
        </form>
        <p>Já tem uma conta? Faça login!</p>
      </main>
    </RegistrationScreen>
  );
}

const RegistrationScreen = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  main {
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
    height: 45px;

    display: flex;
    justify-content: center;

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
