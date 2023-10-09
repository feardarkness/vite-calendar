import { useState } from "react";
import "./Dropdown.css";
import caretDown from "../../assets/caret-down.svg";

interface Option {
  id: string | number;
  value: string;
}

function DropDown({ options, className }: { options: Option[]; className?: string }) {
  const [selected, setSelected] = useState<Option>({
    id: 0,
    value: "something with a litlle more text",
  });
  const [isOpen, setIsOpen] = useState(false);

  const setSelectedElement = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div className={`container ${className}`}>
      <button className="dropdown" onClick={() => setIsOpen(true)}>
        <div className="dropdown-text">{selected.value}</div>
        <div>
          <img src={caretDown} className="caret-down" alt="caret" />
        </div>
      </button>
      {isOpen ? (
        <div className="options">
          {options.map((option) => (
            <div onClick={() => setSelectedElement(option)} key={option.id}>
              {option.value}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default DropDown;
