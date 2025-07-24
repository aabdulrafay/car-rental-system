"use client";
import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function HeroCard({
  title,
  desc,
  btnText,
  bgColor,
  btnBgColor,
  image,
}) {
  return (
    <motion.div
      className="relative flex flex-col p-3 sm:p-4 rounded-xl text-white flex-1 w-full max-w-full min-w-0 min-h-[200px] sm:min-h-[250px]"
      style={{ backgroundColor: bgColor }}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Content block - stays together */}
      <div className="relative z-10">
        <h2 className="text-lg md:text-2xl font-bold leading-tight">{title}</h2>
        <p className="text-sm md:text-base mt-1 text-white/90 leading-relaxed">{desc}</p>
        <motion.button
          className={clsx(
            "mt-4 px-5 py-2.5 rounded-md text-sm font-semibold text-white transition-transform hover:scale-105",
            btnBgColor === '#54A6FF' ? 'bg-[#54A6FF]' : 'bg-[#3563E9]'
          )}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'tween', duration: 0.16 }}
        >
          {btnText}
        </motion.button>
      </div>

      {/* Image - bottom-right corner, scales responsively */}
      <img
        src={image}
        alt={`Car - ${title}`}
        className="absolute bottom-1 right-2 md:right-5 lg:right-6 w-[130px] sm:w-[230px] md:w-[300px] lg:w-[340px] xl:w-[380px] h-auto object-contain pointer-events-none opacity-90 z-0"
      />
    </motion.div>
  );
}