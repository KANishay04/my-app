import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./contexts/theme";
import { FiSun, FiMoon } from 'react-icons/fi';
import Tooltip from "./Tooltip";
import MyComponent from "./MyComponent";
import { LanguageProvider, useLanguage } from "./LanguageContext"; // Импортируем экспорты из LanguageContext
import './index.css';

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const { language, setLanguage } = useLanguage(); // Получаем текущий язык и функцию для его изменения
  const [themeText, setThemeText] = useState(""); // Стейт для текста темы

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    // Определение текста для темы в зависимости от выбранного языка
    let newText = "";
    if (language === 'en') {
      newText = isDark ? "Dark theme" : "Light theme";
    } else if (language === 'kaz') {
      newText = isDark ? "Қараңғы тақырып" : "Жарық тақырып";
    } else if (language === 'rus') {
      newText = isDark ? "Темная тема" : "Светлая тема";
    }
    setThemeText(newText);
  }, [language, isDark]); // Зависимости: язык и тема

  return (
    <div className="app" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="header" style={{ display: "flex", alignItems: "center" }}>
        <button className="theme-button" type="button" onClick={toggleTheme} style={{ marginRight: "10px" }}>
          {isDark ? <FiSun /> : <FiMoon />}
          <span className="theme-label" style={{ marginLeft: "10px" }}>{themeText}</span>
        </button>
        <div className="language-selector">
          <select value={language} onChange={handleChangeLanguage}>
            <option value="en">English</option>
            <option value="kaz">Қазақша</option>
            <option value="rus">Русский</option>
          </select>
        </div>
      </div>
      <div className="content">
        <Tooltip id="my-tooltip-left" content="Hello!" place="left">
          <a href="" data-tooltip-id="my-tooltip-left">
            <span className="icon" style={{ fontSize: "36px", marginRight: "10px" }}>😊</span>
          </a>
        </Tooltip>
        <Tooltip id="my-tooltip-top" content="Nice to meet you!" place="top">
          <a href="" data-tooltip-id="my-tooltip-top">
            <span className="icon" style={{ fontSize: "36px", marginRight: "10px" }}>😊</span>
          </a>
        </Tooltip>
        <Tooltip id="my-tooltip-right" content="Good luck" place="right">
          <a href="" data-tooltip-id="my-tooltip-right">
            <span className="icon" style={{ fontSize: "36px", marginRight: "10px" }}>😊</span>
          </a>
        </Tooltip>
        <MyComponent />
      </div>
    </div>
  );
};

export default () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
