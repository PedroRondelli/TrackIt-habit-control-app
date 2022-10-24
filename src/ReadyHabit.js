import styled from "styled-components";
import { BUTTONS } from "./HabitGenerator";

export default function ReadyHabit({ habit }) {
  return (
    <HabitContainer>
      <h1>{habit.name}</h1>
      <Week>
        {BUTTONS.map((e) => (
          <Day>{e}</Day>
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
    text-align: left;

    margin: 0px 5px;

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

  background-color: #ffff;

  color: #d5d5d5;
`;
const Week = styled.div`
  display: flex;

  margin-bottom: 10px;

  width: 270px;
`;
