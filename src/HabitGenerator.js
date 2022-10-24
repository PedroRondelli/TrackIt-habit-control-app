import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import HabitDay from "./HabitDay";
import { UserContext } from "./providers/userInformation";
import Loading from "./Loading";

export const BUTTONS = ["D", "S", "T", "Q", "Q", "S", "S"];

export default function HabitGenerator({ setCreat, fetchHabits }) {
  const [createdHabit, setCreatedHabit] = useState({
    name: "",
    days: [],
  });
  const { userObject } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userObject.token}`,
    },
  };
  const [isLoading, setLoading] = useState(false);

  function handleForm(e) {
    setCreatedHabit({ ...createdHabit, [e.target.name]: e.target.value });
  }

  function sendHabit() {
    setLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      createdHabit,
      config
    );
    promise.then(() => {
      fetchHabits();
      setCreat(false);
      setLoading(false);
    });
  }

  return (
    <Generator>
      <input
        data-identifier="input-habit-name"
        onChange={(e) => handleForm(e)}
        name="name"
        placeholder="nome do hábito"
        disabled={isLoading}
      ></input>
      <Week>
        {BUTTONS.map((day, index) => (
          <HabitDay
            index={index}
            createdHabit={createdHabit}
            setCreatedHabit={setCreatedHabit}
            day={day}
            isLoading={isLoading}
          />
        ))}
      </Week>
      <SaveAndCancel>
        <p data-identifier="cancel-habit-create-btn" onClick={() => setCreat(false)}>Cancelar</p>
        <Save data-identifier="save-habit-create-btn" isLoading={isLoading} onClick={sendHabit}>{isLoading ? <Loading /> : "Salvar"}</Save>
      </SaveAndCancel>
    </Generator>
  );
}

const Generator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90vw;

  input {
    width: 80%;
    height: 45px;
    margin: 5px 5px;

    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #d5d5d5;

    ::placeholder {
      font-family: "Lexend Deca", sans-serif;
      font-size: 19.98px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      color: #c4bebe;
    }
  }
`;

const SaveAndCancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 80vw;

  font-family: Lexend Deca;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  color: #52b6ff;
`;

const Save = styled.button`
  height: 35px;
  width: 84px;

  display:flex;
  align-items: center;
  justify-content: center;

  font-family: Lexend Deca;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  color: white;

  opacity: ${(props) => (props.isLoading ? "50%" : "100%")};

  background: #52b6ff;

  border-radius: 4.64px;
  border: transparent;

  margin: 0 5px;
`;

const Week = styled.div`
  display: flex;

  margin-bottom: 10px;

  width: 270px;
`;
