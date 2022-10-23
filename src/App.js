import GlobalStyle from "./globalstyled";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Today from "./Today";
import { UserProvider } from "./providers/userInformation";
import Habits from "./Habits";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Registration />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habits/>}/>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
