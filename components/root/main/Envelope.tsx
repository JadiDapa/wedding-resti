// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "motion/react";

// export default function Envelope({ children }: { children: React.ReactNode }) {
//   const [opened, setOpened] = useState(false);

//   return (
//     <div className="relative mx-auto h-screen w-full overflow-hidden sm:w-103">
//       <motion.div
//         className="no-scrollbar h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth"
//         initial={{ y: "100%" }}
//         animate={{ y: opened ? "0%" : "100%" }}
//         transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
//       >
//         {children}
//       </motion.div>

//       <AnimatePresence>
//         {!opened && (
//           <motion.div
//             className="absolute inset-0 cursor-pointer"
//             exit={{ opacity: 0, scale: 1.05 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             onClick={() => setOpened(true)}
//           >
//             <Image
//               src={"/images/bg-hero.png"}
//               alt=""
//               className="object-cover object-center"
//               fill
//             />
//             <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
//               <motion.figure
//                 className="relative h-100 w-100"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <Image
//                   src={"/images/envelope.png"}
//                   alt=""
//                   className="object-contain object-center"
//                   fill
//                 />
//               </motion.figure>
//               <motion.p
//                 className="text-sm font-semibold tracking-[0.3em]"
//                 animate={{ opacity: [0.4, 1, 0.4] }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 KETUK UNTUK MEMBUKA
//               </motion.p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

const GIF_DURATION_MS = 7500;

export default function Envelope({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<"idle" | "playing" | "done">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    if (stage !== "idle") return;
    setStage("playing");

    timerRef.current = setTimeout(() => {
      setStage("done");
    }, GIF_DURATION_MS);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="relative mx-auto h-screen w-full overflow-hidden sm:w-103">
      {/* Content underneath */}
      <motion.div
        className="no-scrollbar h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth"
        initial={{ y: "100%" }}
        animate={{ y: stage === "done" ? "0%" : "100%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {stage !== "done" && (
          <motion.div
            className="absolute inset-0"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Static image — always mounted, hidden behind GIF via z-index */}
            <div
              className="absolute inset-0 cursor-pointer"
              style={{ zIndex: stage === "playing" ? 0 : 10 }}
              onClick={handleClick}
            >
              <Image
                src="/images/envelope-screen.png"
                alt=""
                className="object-cover object-center"
                fill
              />

              <div
                className="absolute right-0 left-0 flex flex-col items-center gap-2"
                style={{ top: "20%" }}
              >
                <motion.p
                  className="font-brittany text-2xl tracking-wide text-white drop-shadow-md"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Undangan Pernikahan
                </motion.p>
              </div>

              <div
                className="absolute right-0 left-0 flex flex-col items-center gap-2"
                style={{ top: "80%" }}
              >
                <motion.p
                  className="text-sm font-semibold tracking-[0.3em] text-white drop-shadow-md"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  KLIK UNTUK MEMULAI
                </motion.p>
              </div>
            </div>

            {/* GIF — layered on top when playing */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                zIndex: stage === "playing" ? 10 : 0,
                opacity: stage === "playing" ? 1 : 0,
              }}
            >
              <img
                src="/images/envelope-animation.gif"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
