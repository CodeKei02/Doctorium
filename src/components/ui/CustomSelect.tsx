import React, { useState, useRef, useEffect } from "react";
import { Field, FormikProps, FieldMetaProps } from "formik";

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
          meta,
        }: {
          form: FormikProps<any>;
          meta: FieldMetaProps<any>;
        }) => (
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`
                h-10 w-full border rounded-md px-3 py-2 text-left bg-white 
                hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]
                ${
                  meta.touched && meta.error
                    ? "border-red-500"
                    : "border-gray-300"
                }
              `}
            >
              {selectedOption && selectedOption.label}
            </button>

            {isOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setSelectedOption(option);
                      form.setFieldValue(name, option.value);
                      setIsOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-200 rounded-md"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </Field>
    </div>
  );
};
