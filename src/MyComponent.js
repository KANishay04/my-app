import React, { useContext } from "react";
import { useLanguage } from "./LanguageContext";

const MyComponent = () => {
  const { language } = useLanguage();

  // Определение текстов в зависимости от текущего языка
  const texts = {
    en: {
      timeSpent: "Time spent on this component",
      currentTime: "Current time"
    },
    kaz: {
      timeSpent: "Бұл компонентке жұмсалған уақыт",
      currentTime: "Қазіргі уақыт"
    },
    rus: {
      timeSpent: "Время, потраченное на этот компонент",
      currentTime: "Текущее время"
    }
  };
  const timeSpent = 10; // Замените на ваше значение времени
  const currentTime = new Date();

  return (
    <div>
      <p>{texts[language].timeSpent}: {timeSpent} seconds</p>
      <p>{texts[language].currentTime}: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default MyComponent;
