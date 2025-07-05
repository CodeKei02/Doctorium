import { motion } from "framer-motion";

interface WelcomeBannerProps {
  doctorName: string;
  subtitle: string;
}

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const letters = text.split("");

  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter} {/* Preserva espacios */}
        </motion.span>
      ))}
    </div>
  );
};

export const WelcomeBanner = ({ doctorName, subtitle }: WelcomeBannerProps) => {
  return (
    <div className="w-full pb-5 bg-[var(--primary-color)] text-white px-5 py-4 rounded-lg flex flex-col gap-2">
      <AnimatedText
        text={`¡Bienvenido de vuelta, ${doctorName}!`}
        className="text-2xl font-bold"
      />
      <motion.span
        className="text-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          ease: "easeOut",
        }}
      >
        {subtitle}
      </motion.span>
    </div>
  );
};
