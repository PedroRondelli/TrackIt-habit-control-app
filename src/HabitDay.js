import { useState } from "react";
import styled from "styled-components";

export default function HabitDay({
  day,
  setCreatedHabit,
  createdHabit,
  index,
}) {
  const [isSelected, setSelected] = useState(false);

  function SelectDay() {
    if (!isSelected) {
      setSelected(true);
      const newArray =[...createdHabit.days]
      newArray.push(index)
      setCreatedHabit({...createdHabit,days:newArray})
      
    }else{
        setSelected(false)
        const newArray=createdHabit.days.filter((element)=> element!==index)
        setCreatedHabit({...createdHabit,days:newArray})
    }
  }

  return (
    <DayButton onClick={SelectDay} isSelected={isSelected}>
      {day}
    </DayButton>
  );
}

const DayButton = styled.button`
  width: 30px;
  height: 30px;

  border: 1px solid #d5d5d5;
  border-radius: 5px;

  margin: 0 5px;

  background-color: ${(props) => (props.isSelected ? "#6666" : "#ffff")};

  color: #d5d5d5;
`;
