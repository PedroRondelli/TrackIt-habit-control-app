import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CheckHabit from "./CheckHabit";
import Footer from "./Footer";
import { UserContext } from "./providers/userInformation";
import TopBar from "./TopBar";

const WEEK = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const YEAR = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

export default function Today() {
  const { userObject } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userObject.token}`,
    },
  };
  const [habitsOfDay, setHabitsOfDay] = useState([]);
  
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promise.then((resp) => {
      console.log(resp.data);
      setHabitsOfDay(resp.data);
    });
    promise.catch((err) => console.log(err.response.data));
  }, []);

  return (
    <TodayScreen>
      <TopBar image={userObject.image} />
      <DailyProgress>
        <h1>{`${WEEK[dayjs().day()]}, ${dayjs().date()}/${
          YEAR[dayjs().month()]
        }`}</h1>
        <p>Nenhum hábito concluído ainda</p>
      </DailyProgress>
      {habitsOfDay.map((habit) => (
        <IndividualHabit>
          <CheckHabit token={userObject.token} habit={habit} />
        </IndividualHabit>
      ))}
      <Footer />
    </TodayScreen>
  );
}

const TodayScreen = styled.div`
  margin-top: 70px;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DailyProgress = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;

  width: 90vw;

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
    color: #bababa;
  }
`;

const IndividualHabit = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
`;
