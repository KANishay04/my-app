import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ id, content, place, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => {
    setIsVisible(true);
  };

  const handleHide = () => {
    setIsVisible(false);
  };

  return (
    <div className="tooltip-container" onMouseOver={handleShow} onMouseOut={handleHide}>
      {children}
      {isVisible && (
        <div className={`tooltip tooltip-${place}`} id={id}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
