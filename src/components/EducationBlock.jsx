/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const EducationBlock = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBlock = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`education-block ${isExpanded ? "expanded" : ""}`}
      onClick={toggleBlock}
    >
      <div className="block-title">
        {title}
        {isExpanded ? (
          <FaChevronUp className="arrow expanded" />
        ) : (
          <FaChevronDown className="arrow" />
        )}
      </div>
      <div className="block-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EducationBlock;
