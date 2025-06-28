import React, { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Characters = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("VIKI");

  // simplified avatar data
  const Avatar = {
    VIKI: {
      name: "VIKI",
      power: 80,
      stable: 70,
      penetrate: 30,
      portable: 90,
      stars: 3,
    },
    EVA: {
      name: "EVA",
      power: 87,
      stable: 40,
      penetrate: 64,
      portable: 25,
      stars: 4,
    },
  };

  // get current avatar data
  const currentAvatar = Avatar[selectedAvatar];

  return (
    <div className="relative w-full h-screen overflow-hidden mb-[10%]">
      {/* section-title */}
      <div className="relative pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest md:-mb-14 mb-8"
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.7)" }}
        >
          FIGHTERS
        </h1>
      </div>

      {/* main content area */}
      <div className="relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4">
        {/* left side, avatar-info card */}
        <section className="w-full md:w-2/4 flex flex-col md:ml-10">
          {/* selected avatar info card */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.5)]">
            <h1 className="text-2xl font-semibold mb-2">
              {currentAvatar.name}
            </h1>

            {/* avatar stats */}
            <div className="space-y-3 mb-16">
              {["power", "stable", "penetrate", "portable"].map((key) => (
                <div className="flex items-center" key={key}>
                  <span className="w-24 text-gray-400">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                  <div className="bg-gray-800 flex-1 h-4 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-600 to-white"
                      style={{ width: `${currentAvatar[key]}%` }}
                    ></div>
                  </div>
                  <span className="ml-2">{currentAvatar[key]}</span>
                </div>
              ))}
            </div>

            {/* action buttons */}
            <div className="flex gap-3">
              <button className="flex text-sm font-semibold bg-violet-900 rounded-sm px-4 py-1 hover:opacity-70 cursor-pointer transition-all duration-300">
                Proficient
              </button>
              <button className="flex text-sm font-semibold bg-violet-900 rounded-sm px-4 py-1 hover:opacity-70 cursor-pointer transition-all duration-300">
                Redemption
              </button>
            </div>
          </div>

          {/* avatar selection cards */}
          <div className="grid grid-cols-2 gap-4">
            {["VIKI", "EVA"].map((name) => (
              <div
                key={name}
                className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300 border"
                onClick={() => setSelectedAvatar(name)}
              >
                <div className="text-lg mb-2">{name}</div>

                {/* avatar image */}
                <div className="w-20 h-20 bg-gray-800/50 flex justify-center items-center rounded-md mb-2">
                  <img src={`/images/${name}.png`} alt={`${name}-image`} />
                </div>

                {/* star ratings */}
                <div className="flex">
                  {[...Array(Avatar[name].stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-violet-400 text-violet-500"
                    />
                  ))}
                </div>

                {/* highlight for selected avatar */}
                {selectedAvatar === name && (
                  <div className="absolute inset-0 border-2 rounded-lg pointer-events-none" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* right-side 3d model */}
        <div className="relative flex md:w-2/4 w-full md:h-full h-80 items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedAvatar === "VIKI" ? (
              <motion.div
                key="viki"
                className="absolute inset-0"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              >
                <Spline scene="https://prod.spline.design/mMLnihcYSCFtunVh/scene.splinecode" />
              </motion.div>
            ) : (
              <motion.div
                key="eva"
                className="absolute inset-0"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              >
                <Spline scene="https://prod.spline.design/VAunc-SV2KSwqf6Y/scene.splinecode" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Characters;
