import React, { useState, useRef, useEffect } from "react";
import { Field, FormikProps, FieldMetaProps } from "formik";
import { Button } from "@mui/material";
import { MuiIcon } from "@/components/ui/MuiIcon";

interface SelectOption {
  value: string | number;
  label: string;
}

interface CustomSelectProps {
  name: string;
  options: SelectOption[];
  className?: string;
  label?: string;
  required?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  options,
  className = "",
  label,
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    options.length > 0 ? options[0] : null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <Field name={name}>
        {({
          form,
        }: {
          form: FormikProps<Record<string, unknown>>;
          meta: FieldMetaProps<unknown>;
        }) => (
          <div className="relative" ref={dropdownRef}>
            <Button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                backgroundColor: "var(--primary-color)",
                color: "white",
              }}
              className="w-full"
            >
              {selectedOption && selectedOption.label}
            </Button>

            {isOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {options.map((option) => (
                  <Button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setSelectedOption(option);
                      form.setFieldValue(name, option.value);
                      setIsOpen(false);
                    }}
                    style={{
                      backgroundColor:
                        selectedOption?.value === option.value
                          ? "var(--primary-color)"
                          : "white",
                      color:
                        selectedOption?.value === option.value
                          ? "white"
                          : "black",
                    }}
                    className="w-full text-left"
                  >
                    {selectedOption?.value === option.value && (
                      <MuiIcon name="Check" className="white" />
                    )}
                    {option.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        )}
      </Field>
    </div>
  );
};
