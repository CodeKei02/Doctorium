import { Avatar } from "@mui/material";

interface AvatarUserProps {
  name: string;
  size?: number;
  src?: string;
  bgColor?: string;
  textColor?: string;
}

export const AvatarUser: React.FC<AvatarUserProps> = ({
  name,
  size = 40,
  src,
  bgColor = "#4399CA",
  textColor = "#fff",
}) => {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <Avatar
      alt={name}
      src={src}
      sx={{
        width: size,
        height: size,
        bgcolor: bgColor,
        color: textColor,
        fontWeight: 600,
        fontSize: Math.max(12, Math.round((size as number) * 0.4)),
      }}
    >
      {initials}
    </Avatar>
  );
};
