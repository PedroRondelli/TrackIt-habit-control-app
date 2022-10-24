import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

export default function Footer() {
  const percentage = 66;
  return (
    <Menu>
      <Link to="/habitos">
        <p>Hábitos</p>
      </Link>
      <Progress>
        <Link to="/hoje">
          <CircularProgressbar
            value={percentage}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </Link>
      </Progress>
      <Link>
        <p>Histórico</p>
      </Link>
    </Menu>
  );
}

const Menu = styled.div`
  height: 100px;
  width: 100vw;

  padding: 10px;
  box-sizing: border-box;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  a {
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    color: #52b6ff;

    text-decoration: none;
  }
`;

const Progress = styled.div`
  width: 70px;

  text {
    text-anchor: middle;
    dominant-baseline: middle;
  }
`;
