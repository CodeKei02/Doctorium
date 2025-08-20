import { Switch } from "@mui/material";

interface CheckProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Check = ({ checked, onChange }: CheckProps) => (
  <Switch
    checked={checked}
    onChange={onChange}
    slotProps={{ input: { "aria-label": "controlled" } }}
  />
);
