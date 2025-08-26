import React from "react";
import { CustomSelect } from "./CustomSelect";

interface TimeSelectProps {
  name: string;
  className?: string;
  required?: boolean;
}

const generateTimeOptions = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minutes = 0; minutes < 60; minutes += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
      times.push({ value: time, label: time });
    }
  }
  return times;
};

export const TimeSelect: React.FC<TimeSelectProps> = ({
  name,
  className,
  required = false,
}) => {
  const timeOptions = generateTimeOptions();

  return (
    <CustomSelect
      name={name}
      options={timeOptions}
      className={className}
      required={required}
    />
  );
};
