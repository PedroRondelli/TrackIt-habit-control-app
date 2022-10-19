import GlobalStyle from "./globalstyled";
import Login from "./LoginScreen";
// import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Habits from "./Habits";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/cadastro" element={<Registration/>}/>
          <Route path="/habitos" element={<Habits/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
