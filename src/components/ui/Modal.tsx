import { AnimatePresence, motion } from "motion/react";

export const Modal: React.FC<{ show: boolean; children: React.ReactNode }> = ({
  show,
  children,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div key="modal" exit={{ opacity: 0 }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
