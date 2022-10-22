import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";
import logo from "./loginImage.png";
import { UserContext } from "./providers/userInformation";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {setUser}= useContext(UserContext)

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function login(e) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      form
    );
    promise.then((resp) => {
      setLoading(false);
      console.log(resp.data)
      setUser(resp.data)
      navigate("/hoje");
    });
    promise.catch((err) => {
      setLoading(false);
      alert(err.response.data.message);
    });
  }

  return (
    <LoginScreen isLoading={isLoading}>
      <main>
        <img src={logo} alt="TrackIt" />
        <form onSubmit={login}>
          <input
            type="email"
            required
            placeholder="email"
            name="email"
            onChange={handleForm}
            value={form.email}
            disabled={isLoading}
          />
          <input
            type="password"
            required
            placeholder="senha"
            name="password"
            onChange={handleForm}
            value={form.password}
            disabled={isLoading}
          />
          <button disabled={isLoading} type="submit">
            {isLoading ? <Loading /> : "Entrar"}
          </button>
        </form>
        <Link to="/cadastro">
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </main>
    </LoginScreen>
  );
}

const LoginScreen = styled.div`
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

    opacity: ${(props) => (props.isLoading ? "50%" : "100%")};

    display: flex;
    justify-content: center;

    cursor: pointer;

    width: 100%;

    background-color: #52b6ff;

    color: white;

    border-radius: 5px;
  }
  p {
    color: #52b6ff;
    text-decoration-line: underline;
    text-decoration-color: #52b6ff;
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
