import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Footer() {
  const percentage = 66;
  return (
    <Menu>
      <Progress>
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
      </Progress>
    </Menu>
  );
}

const Menu = styled.div`
  height: 100px;
  width: 100vw;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Progress = styled.div`
  width: 20%;

  text{
    text-anchor: middle;
    dominant-baseline: middle;
  }
`;
