import { motion } from 'framer-motion'; // Revisa que no falte esta línea

const Skeleton = () => {
  return (
    <div className="w-full aspect-[3/4] bg-gray-200 overflow-hidden relative">
      {/* El brillo que se mueve (Shimmer effect) */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
    </div>
  );
};

export default Skeleton;