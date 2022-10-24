import { createContext, useState } from "react";

export const PercentageContext = createContext({});

export const PercentageProvider = (props) => {
  const [userObject, setUser] = useState({
    id: 0,
    name: "",
    image: "",
    email: "",
    password: "",
    token: "",
  });

  return (
    <PercentageContext.Provider value={{userObject,setUser}}>
      {props.children}
    </PercentageContext.Provider>
  );
};
