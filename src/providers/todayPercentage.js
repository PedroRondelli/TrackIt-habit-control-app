import { createContext, useState } from "react";

export const PercentageContext = createContext({});

export const PercentageProvider = (props) => {
  const [percentage, setPercentage] = useState(0);

  return (
    <PercentageContext.Provider value={{ percentage, setPercentage }}>
      {props.children}
    </PercentageContext.Provider>
  );
};
