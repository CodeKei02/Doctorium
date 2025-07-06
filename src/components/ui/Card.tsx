import { motion } from "framer-motion";

export const Card: React.FC<{ children: React.ReactNode; style?: string }> = ({
  children,
  style = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className={`w-full min-w-0 flex-shrink border border-gray-200 rounded-lg p-2 2xs:p-3 2md:p-4 hover:shadow-md overflow-hidden ${style}`}
    >
      {children}
    </motion.div>
  );
};
