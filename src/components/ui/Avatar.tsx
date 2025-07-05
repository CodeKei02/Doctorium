export const Avatar: React.FC<{ name: string; size?: string }> = ({
  name,
  size,
}) => {
  return (
    <span
      className={`w-${size} h-${size} bg-[hsl(262,83%,58%)] text-white rounded-full flex items-center justify-center text-sm font-medium`}
    >
      {name
        .split(" ")
        .map((letter) => letter.charAt(0))
        .join("")}
    </span>
  );
};
