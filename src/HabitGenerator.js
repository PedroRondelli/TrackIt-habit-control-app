import styled from "styled-components";

const BUTTONS = ["D", "S", "T", "Q", "Q", "S", "S"];

export default function HabitGenerator() {
  return (
    <Generator>
      <input placeholder="nome do hábito"></input>
      <Week>
        {BUTTONS.map((day) => (
          <DayButton>{day}</DayButton>
        ))}
      </Week>
      <SaveAndCancel>
        <p>Cancelar</p>
        <Save>Salvar</Save>
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

const DayButton = styled.button`
  width: 30px;
  height: 30px;

  border: 1px solid #d5d5d5;
  border-radius: 5px;

  margin: 0 5px;

  color: #d5d5d5;
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

  font-family: Lexend Deca;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  color: white;

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
