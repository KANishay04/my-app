import React from 'react';
import { useLanguage } from './LanguageContext';

const SettingsForm = () => {
  const { language, setLanguage } = useLanguage();

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <h2>Settings</h2>
      <label>
        Language:
        <select value={language} onChange={handleChangeLanguage}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </label>
    </div>
  );
};

export default SettingsForm;
