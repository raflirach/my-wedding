import { useTransition, animated } from "@react-spring/web";
import {
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1631133961299-4bbfedcac74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];

export default function Header({ m }) {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });

  const count = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(2000);
  const rounded = useTransform(count, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);

  useEffect(() => {
    setTimeout(() => {
      const animation = animate(count, 15, { duration: 2 });
      const animation2 = animate(count2, 7, { duration: 4 });
      const animation3 = animate(count3, 2023, { duration: 7 });

      return [animation.stop, animation2.stop, animation3.stop];
    }, 4000);
  }, []);

  return (
    <div className="relative" id="home">
      {transitions((style, i) => (
        <animated.div
          className="absolute inset-0 bg-fixed bg-cover"
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="relative z-10 h-screen grid place-items-center text-center font-alice backdrop-filter backdrop-brightness-[.90] text-primary antialiased">
        <div className="w-3/4 py-2 px-2 rounded-lg overflow-hidden">
          <m.div
            initial={{ y: "-120%" }}
            animate={{ y: "0%" }}
            transition={{
              type: "spring",
              stiffness: 40,
              duration: 2,
              delay: 2,
            }}
            className="text-2xl xs:text-xl"
          >
            The Wedding Of
          </m.div>
        </div>
        <div className="relative flex justify-center items-center">
          <m.div
            initial={{ x: "-120%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 40,
              duration: 2,
              delay: 2.3,
            }}
            className="absolute text-5xl xs:text-4xl -bottom-2 right-4 overflow-hidden"
          >
            R
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 40,
              duration: 2,
              delay: 2.3,
            }}
            className="absolute text-7xl xs:text-6xl"
          >
            /
          </m.div>
          <m.div
            initial={{ x: "120%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 40,
              duration: 2,
              delay: 2.3,
            }}
            className="absolute text-5xl xs:text-4xl top-0 left-4 overflow-hidden"
          >
            R
          </m.div>
        </div>
        <div className="overflow-hidden">
          <m.div
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 40,
              duration: 2,
              delay: 2.6,
            }}
            className="text-4xl xs:text-3xl mb-2"
          >
            Rafli & Raka
          </m.div>
          <m.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 10,
              delay: 3,
            }}
            className="border-b border-primary"
          ></m.div>
          <div className="flex justify-center items-center w-full">
            <div className="py-2">
              <m.div
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  duration: 2,
                  delay: 2.9,
                }}
                className="text-4xl xs:text-3xl tracking-widest font-light mb-6 flex justify-center items-center"
              >
                <m.span>{rounded}</m.span> <span className="mx-2">.</span>{" "}
                <m.span>{rounded2}</m.span> <span className="mx-2">.</span>{" "}
                <m.span>{rounded3}</m.span>
              </m.div>
              <m.div
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  duration: 2,
                  delay: 3.2,
                }}
              >
                <Link
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MDBvaDBwdjEyMGV1Y3NoaTcxdjRjbXE3ODIgcmFmbGkwNjAzOTVAbQ&amp;tmsrc=rafli060395%40gmail.com"
                  className="text-2xl xs:text-xl border px-4 py-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30"
                >
                  Save the date
                </Link>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
