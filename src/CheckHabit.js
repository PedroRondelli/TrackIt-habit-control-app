import styled from "styled-components";

export default function CheckHabit({ habit }) {
  return (
    <HabitOfTheDay>
      <NameAndBackground>
        <h1>{habit.name}</h1>
        <p>{`Sequência atual: ${habit.currentSequence} dias`}</p>
        <p>{`Seu recorde: ${habit.highestSequence} dias`}</p>
      </NameAndBackground>
      <ion-icon name="checkbox"></ion-icon>
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
