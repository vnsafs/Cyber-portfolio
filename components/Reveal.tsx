"use client";

/**
 * Reveal — motion system centralizado do redesign.
 *
 * Encapsula o padrão "fade + slide on scroll" pedido na Etapa 2.4 do briefing,
 * usando framer-motion (já presente em package.json, ainda não utilizado).
 *
 * Uso: envolver o conteúdo interno de uma seção existente, sem alterar
 * hierarquia, props ou dados dos componentes que a usam.
 *
 *   <Reveal>
 *     <h2>About Me</h2>
 *   </Reveal>
 */

import { motion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div";
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
