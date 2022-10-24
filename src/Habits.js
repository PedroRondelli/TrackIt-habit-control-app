import { useContext, useEffect, useState } from "react";
import TopBar from "./TopBar";
import { UserContext } from "./providers/userInformation";
import styled from "styled-components";
import Footer from "./Footer";
import axios from "axios";
import HabitGenerator from "./HabitGenerator";
import ReadyHabit from "./ReadyHabit";

const NOHABITSTEXT =
  "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";

export default function Habits() {
  const { userObject } = useContext(UserContext);
  const [HabitsList, setHabits] = useState([]);
  const [creating, setCreat] = useState(false);
  const config = {
    headers: {
      Authorization: `Bearer ${userObject.token}`,
    },
  };

  function fetchHabits() {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );
    promise.then((resp) => setHabits(resp.data));
  }

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <HabitsScreen>
      <TopBar image={userObject.image} />
      <PlusHabits>
        <h1>Meus hábitos</h1>
        <button onClick={() => setCreat(true)}>+</button>
      </PlusHabits>
      {creating && (
        <HabitGenerator fetchHabits={fetchHabits} setCreat={setCreat} />
      )}
      {HabitsList.length === 0 ? (
        <NoHabitsText>{NOHABITSTEXT}</NoHabitsText>
      ) : (
        HabitsList.map((habit) => (
          <Habit>
            <ReadyHabit fetchHabits={fetchHabits} habit={habit} />
          </Habit>
        ))
      )}
      <Footer />
    </HabitsScreen>
  );
}

const HabitsScreen = styled.div`
  margin-top: 70px;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PlusHabits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: azure;

  padding: 10px;

  width: 90vw;
  height: 55px;

  h1 {
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    color: #126ba5;
  }

  button {
    height: 35px;
    width: 40px;
    border-radius: 4.64px;
    border: transparent;

    text-align: center;
    font-size: 26.98px;

    color: white;

    background-color: #52b6ff;
  }
`;
const NoHabitsText = styled.p`
  font-family: Lexend Deca;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  padding: 10px;

  width: 90vw;

  color: #6666;
`;

const Habit = styled.div`
  width: 90vw;
`;
