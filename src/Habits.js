import styled from "styled-components";

export default function Habits() {
  return (
    <>
      <Header>
        <h1>TrackIt</h1>
      </Header>
    </>
  );
}

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 70px;

  padding: 5px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    font-family: Playball;
    font-size: 39px;
    line-height: 49px;
    letter-spacing: 0em;
    color: white;
  }
`;
