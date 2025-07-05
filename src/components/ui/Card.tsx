import { motion } from "framer-motion";

export const Card: React.FC<{ children: any; style?: string }> = ({
  children,
  style = "w-full border border-gray-200 rounded-lg p-4 hover:shadow-md",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className={style}
    >
      {children}
    </motion.div>
  );
};
