import React, { useEffect, useState } from "react";
import withClickOutside from "./withClickOutside";

const SelectComponent = React.forwardRef(
  (
    { options, placeholder = "", onChange, selectedKey, open, setOpen },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(placeholder);

    useEffect(() => {
      if (selectedKey) {
        setInputValue(options.find((o) => o.key === selectedKey).value);
      }
    }, [selectedKey, options]);

    useEffect(() => {
      if (!open && options.findIndex((o) => o.value === inputValue) === -1) {
        if (!inputValue) {
          onChange("");
        } else {
          if (selectedKey) {
            setInputValue(options.find((o) => o.key === selectedKey).value);
          } else {
            setInputValue("");
          }
        }
      }
    }, [open, options, selectedKey, inputValue, onChange]);

    const onInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const onInputClick = () => {
      setOpen((prevValue) => !prevValue);
    };

    const onOptionSelected = (option) => {
      onChange !== undefined && onChange(option.key);
      onChange !== undefined && setInputValue(option.value);
      setOpen(false);
    };

    const clearDropdown = () => {
      setInputValue("");
      onChange("");
    };

    return (
      <div className="dropdown-container" ref={ref}>
        <div className="input-container" onClick={onInputClick}>
          <input
            type="text"
            value={inputValue}
            placeholder={placeholder}
            onChange={onInputChange}
          />
          <div className="input-arrow-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" fill="var(--blue)"/></svg>
          </div>

          {selectedKey || inputValue ? (
            <div className="input-clean-container" onClick={clearDropdown}>
              x
            </div>
          ) : null}
        </div>
        <div className={`dropdown ${open ? "visible" : ""}`}>
          {options
            .filter((item) => {
              const searchTerm = inputValue.toLowerCase();
              const v = item.value.toLowerCase();

              if (!searchTerm) return true;

              return v.startsWith(searchTerm);
            })
            .map((opt) => (
              <div
                key={opt.key}
                onClick={() => onOptionSelected(opt)}
                className="option"
                value={opt.key}
              >
                {opt.value}
              </div>
            ))}
        </div>
      </div>
    );
  }
);

export default withClickOutside(SelectComponent);
