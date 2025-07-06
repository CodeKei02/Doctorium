// import * as motion from "motion/react-client"
import { motion } from "framer-motion";

export const Check = ({
  id,
  checked,
  setChecked,
}: {
  id: string;
  checked: boolean;
  setChecked: (id: string) => void;
}) => {
  return (
    <button
      type="button"
      className={`flex items-center px-0.5 w-10 h-6 rounded-full cursor-pointer justify-start ${
        !checked ? " bg-gray-200" : "bg-[var(--primary-color)]"
      }`}
      style={{
        justifyContent: "flex-" + (!checked ? "start" : "end"),
      }}
      onClick={() => setChecked(id)}
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full"
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
};
