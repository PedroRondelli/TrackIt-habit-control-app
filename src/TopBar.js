import { Link } from "react-router-dom";
import styled from "styled-components";

export default function TopBar({ image }) {
  return (
    <Header>
      <Link to="/">
        <h1>TrackIt</h1>
      </Link>
      <img src={image} alt="imagem perfil" />
    </Header>
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

  a {
    font-family: Playball;
    font-size: 39px;
    line-height: 49px;
    letter-spacing: 0em;
    color: white;

    text-decoration: none;
  }
  img {
    height: 51px;
    width: 51px;
    border-radius: 98.5px;
  }
`;
