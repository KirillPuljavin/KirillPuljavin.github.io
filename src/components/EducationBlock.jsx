/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const EducationBlock = ({ title, description, experience, labels }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBlock = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`education-block ${isExpanded ? "expanded" : ""}`}
      onClick={toggleBlock}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") toggleBlock();
      }}
    >
      <div className="header">
        <div className="block-title">{title}</div>
        <div className="experience">{experience}</div>
        {isExpanded ? (
          <FaChevronUp className="arrow expanded" />
        ) : (
          <FaChevronDown className="arrow" />
        )}
      </div>
      <div className="block-content">
        <p>{description}</p>
        {labels && labels.length > 0 && (
          <div className="labels">
            {labels.map((label, index) => (
              <span key={index} className="label">
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationBlock;
