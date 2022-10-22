import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [userObject, setUser] = useState({
    id: 0,
    name: "",
    image: "",
    email: "",
    password: "",
    token: "",
  });

  return (
    <UserContext.Provider value={{userObject,setUser}}>
      {props.children}
    </UserContext.Provider>
  );
};
