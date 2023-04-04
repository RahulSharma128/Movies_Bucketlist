import React, { useState } from "react";

const Card = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [savedData, setSavedData] = useState(null);
  //const [movies,setSaveMovie] = useState([]);


  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setSavedData(data);
    } else {
      setSavedData(null);
    }
  };

  return (
    <div className="shadow-lg flex w-full cursor-pointer">
      <div className="rounded-l-md p-5 w-36 bg-blue-200">
        <img src="./card.svg" alt="Ícone padrão de item do card" />
      </div>
      <main className="py-7 px-5 rounded-r-md w-full bg-white">
        <span className="flex flex-row justify-between">
          <h4 className="uppercase font-normal">{data.subtitle}</h4>
          <p>{data.updatedAt}</p>
        </span>
        <h1 className="font-bold text-xl">{data.title}</h1>
        <label className="checkbox-container">
          Checkbox
          <input type="checkbox" checked={isChecked} onClick={handleCheckboxClick} />
          <span className="checkmark"></span>
        </label>
        {savedData && (
          <p>Data saved: {savedData.title} - {savedData.subtitle} - {savedData.updatedAt}</p>
        )}
      </main>
    </div>
  );
};

export default Card;
