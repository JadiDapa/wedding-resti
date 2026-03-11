"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import {
  slideDown,
  slideUp,
  slideLeft,
  slideRight,
  fade,
  VIEWPORT,
  type MotionOptions,
} from "@/lib/motion";

type Props = HTMLMotionProps<"div"> & MotionOptions;

const make = (variants: (opts: MotionOptions) => object) =>
  function Animated({
    delay,
    duration,
    ease,
    className,
    children,
    ...rest
  }: Props) {
    return (
      <motion.div
        variants={variants({ delay, duration, ease })}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className={className}
        {...rest}
      >
        {children}
      </motion.div>
    );
  };

export const SlideDown = make(slideDown);
export const SlideUp = make(slideUp);
export const SlideLeft = make(slideLeft);
export const SlideRight = make(slideRight);
export const Fade = make(fade);
