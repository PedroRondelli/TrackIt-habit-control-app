import styled from "styled-components";
import logo from "./loginImage.png";

export default function Login() {
  return (
    <LoginScreen>
      <div>
        <img src={logo} alt="TrackIt" />
        <input placeholder="email"/>
        <input placeholder="senha" />
        <button>Entrar</button>
      </div>
    </LoginScreen>
  );
}

const LoginScreen = styled.div`
  width: 100vw;
  min-height: 100vh;

  background-color: saddlebrown;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div{
    width: 90%;
    height: 85%;

    background-color: bisque;

    display:flex;
    flex-direction: column;
    align-items: center;
  }
  input{
    width: 303px;
    height: 45px;

    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;

    :placeholder{

    }
  }
`;
