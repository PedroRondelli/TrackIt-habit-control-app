import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import { BUTTONS } from "./HabitGenerator";
import { UserContext } from "./providers/userInformation";

export default function ReadyHabit({ habit, fetchHabits }) {
  const { userObject } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userObject.token}`,
    },
  };
  function deleteHabit() {
    const promise = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`,
      config
    );
    promise.then(() => fetchHabits());
  }

  return (
    <HabitContainer>
      <h1>
        {habit.name}
        <ion-icon onClick={deleteHabit} name="trash-outline"></ion-icon>
      </h1>
      <Week>
        {BUTTONS.map((e, index) => (
          <Day includes={habit.days.includes(index)}>{e}</Day>
        ))}
      </Week>
    </HabitContainer>
  );
}

const HabitContainer = styled.div`
  h1 {
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;

    display: flex;
    justify-content: space-between;

    position: relative;

    margin: 10px 5px;

    color: #6666;
  }
`;

const Day = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #d5d5d5;
  border-radius: 5px;

  margin: 0 5px;

  background-color: ${(props) => (props.includes ? "#6666" : "#ffff")};

  color: #d5d5d5;
`;
const Week = styled.div`
  display: flex;

  margin-bottom: 10px;

  width: 270px;
`;
