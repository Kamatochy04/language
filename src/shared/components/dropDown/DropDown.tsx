import { useEffect, useRef, useState } from "react";

import styles from "./dropDown.module.scss";
import { CaretDownOutlined } from "@ant-design/icons";

type DropDownOptions = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: DropDownOptions[];
  placeholder: string;
  value: string;
  onSelect: (value: string) => void;
};

export function DropDown({
  options,
  placeholder,
  value,
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handelClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handelClickOutside);

    return () => document.removeEventListener("mousedown", handelClickOutside);
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, []);

  const handelClick = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  const selectedLabel =
    options.find((opt: { value: string }) => opt.value === selectedValue)
      ?.label || placeholder;

  return (
    <div className={` ${styles.container}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.button}
      >
        {selectedLabel}
        <div className={styles.icon}>
          <CaretDownOutlined />
        </div>
      </button>
      {isOpen && (
        <div className={`show-anim ${styles.list}`}>
          {options.map((item) => (
            <h1
              onClick={() => handelClick(item.value)}
              className={styles.list__item}
            >
              {item.value}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
}
