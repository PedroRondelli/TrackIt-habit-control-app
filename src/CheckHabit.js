import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "./providers/userInformation";

export default function CheckHabit({ habit, token }) {
  const [conclude, setConclude] = useState(false);

  const { userObject } = useContext(UserContext);
  console.log(token)
  console.log(userObject.token)
  console.log(habit.id)
  const config = {
    headers: {
      Authorization: `Bearer ${userObject.token}`,
    },
  };

  function concludeHabit() {
    if (!conclude) {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`,{},
        config
      );
      promise.then(()=>{
        setConclude(true)
        console.log("deu certo")
      })
      promise.catch((err)=>alert(err.response.data))
    }else{
      console.log("já está concluido")
    }
  }

  return (
    <HabitOfTheDay>
      <NameAndBackground>
        <h1>{habit.name}</h1>
        <p>{`Sequência atual: ${habit.currentSequence} dias`}</p>
        <p>{`Seu recorde: ${habit.highestSequence} dias`}</p>
      </NameAndBackground>
      <ion-icon onClick={concludeHabit} name="checkbox"></ion-icon>
    </HabitOfTheDay>
  );
}

const HabitOfTheDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  ion-icon {
    height: 69px;
    width: 69px;

    box-sizing: border-box;

    background: #ebebeb;
    border: 1px solid #e7e7e7;
    color: white;
  }

  margin: 15px 0px;
  h1 {
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    color: #6666;
  }
  p {
    font-family: Lexend Deca;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    color: #6666;
  }
`;
const NameAndBackground = styled.div``;
