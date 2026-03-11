export const EASE = [0.25, 0.1, 0.25, 1] as const;
export const VIEWPORT = { once: true, amount: 0.3 } as const;

type Easing =
  | readonly [number, number, number, number]
  | "easeIn"
  | "easeOut"
  | "easeInOut"
  | "linear";

interface MotionOptions {
  delay?: number;
  duration?: number;
  ease?: Easing;
}

const defaults = {
  duration: 1.5,
  ease: EASE,
} satisfies Omit<Required<MotionOptions>, "delay">;

export const slideDown = ({
  delay = 0,
  duration = defaults.duration,
  ease = defaults.ease,
}: MotionOptions = {}) => ({
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease },
  },
});

export const slideUp = ({
  delay = 0,
  duration = defaults.duration,
  ease = defaults.ease,
}: MotionOptions = {}) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease },
  },
});

export const slideLeft = ({
  delay = 0,
  duration = defaults.duration,
  ease = defaults.ease,
}: MotionOptions = {}) => ({
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease },
  },
});

export const slideRight = ({
  delay = 0,
  duration = defaults.duration,
  ease = defaults.ease,
}: MotionOptions = {}) => ({
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease },
  },
});

export const fade = ({
  delay = 0,
  duration = 1.0,
  ease = "easeOut" as const,
}: MotionOptions = {}) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay, ease },
  },
});
