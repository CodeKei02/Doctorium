import { useState } from "react";

export const useChecked = () => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  const handleChange = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChecked((prev) => ({
      ...prev,
      [id]: event.target.checked,
    }));
  };
  return { checked, handleChange };
};
