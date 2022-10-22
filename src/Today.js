import axios from "axios";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { UserContext } from "./providers/userInformation";

export default function Today() {
  const { userObject } = useContext(UserContext);
  const config = {
    headers: {
      "Authorization": `Bearer ${userObject.token}`
    }
  }

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promise.then((resp) => console.log(resp.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  return (
    <TodayScreen>
      <Header>
        <h1>TrackIt</h1>
        <img src={userObject.image} alt="imagem perfil" />
      </Header>
      <Footer/>
    </TodayScreen>
  );
}

const TodayScreen=styled.div`
  margin-top: 70px;
  margin-bottom: 100px;
`

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 70px;

  padding: 5px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    font-family: Playball;
    font-size: 39px;
    line-height: 49px;
    letter-spacing: 0em;
    color: white;
  }
  img {
    height: 51px;
    width: 51px;
    border-radius: 98.5px;
  }
`;
