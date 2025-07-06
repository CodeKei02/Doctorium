import { Field } from "formik";
import { Card } from "./Card";
import { useState } from "react";

interface InputProps {
  title: string;
  name: string;
  label?: string;
  type?: string;
  placeholder: string;
  icon?: string;
}

export const Input = ({
  title,
  name,
  label,
  type,
  placeholder,
  icon,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
      >
        {label}
      </label>
      <Card
        style={`mb-3 mt-2 flex flex-col border rounded-lg p-2 gap-2 transition-all duration-200 ${
          isFocused
            ? "border-2 border-[var(--primary-color)] shadow-sm"
            : "border-gray-200"
        }`}
      >
        <Field
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`focus:outline-none ${
            type === "textarea" ? "resize-none" : ""
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          as={type === "textarea" ? "textarea" : "input"}
          rows={type === "textarea" ? 3 : undefined}
        />
      </Card>
    </>
  );
};
