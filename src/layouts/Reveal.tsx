import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "linear" },
        },
      }}
      initial="hidden"
      animate={mainControls}
    >
      {children}
    </motion.div>
  );
}
