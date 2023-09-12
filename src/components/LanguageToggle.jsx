// LanguageToggle.js
import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageToggle = () => {
  const { selectedLanguage, toggleLanguage } = useLanguage();

  return (
    <>
      <p>Favorite Programming Language: {selectedLanguage}</p>
      <button onClick={toggleLanguage}>Toggle Language</button>
    </>
  );
};

export default LanguageToggle;
