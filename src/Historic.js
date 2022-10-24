import { useContext } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { UserContext } from "./providers/userInformation";
import TopBar from "./TopBar";

export default function Historic() {
  const { userObject } = useContext(UserContext);

  return (
    <HistoricScreen>
      <TopBar image={userObject.image} />
      <PromiseText>
        <h1>Histórico</h1>
      </PromiseText>
      <PromiseText>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </PromiseText>
      <Footer />
    </HistoricScreen>
  );
}

const HistoricScreen = styled.div`
  margin-top: 70px;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PromiseText = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  margin:10px 0px;

  h1 {
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    color: #126ba5;
  }
  p {
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    color: #6666;
  }
`;
