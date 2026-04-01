"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

const LoadingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Show loading for 8 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) {
    return null; // Hide loading page after animation
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      <div className="text-center">
        <div className="relative">
          {currentStep === 0 && <LoadingStep1 />}
          {currentStep === 1 && <LoadingStep2 />}
          {currentStep === 2 && <LoadingStep3 />}
          {currentStep === 3 && <LoadingStep4 />}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center space-x-2">
            <div className="h-1 w-16 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-white/60 text-sm font-medium">Loading...</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const LoadingStep1 = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const springCount = useSpring(0, { bounce: 0, duration: 800 });

  useEffect(() => {
    springCount.on("change", (value) => {
      setDisplayCount(Math.round(value));
    });
    springCount.set(100);
  }, [springCount]);

  return (
    <div className="relative">
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <span className="text-white/40 text-sm uppercase tracking-wider font-semibold">
          Quality Assurance
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight"
      >
        {displayCount}%
      </motion.div>
    </div>
  );
};

const LoadingStep2 = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const springCount = useSpring(0, { bounce: 0, duration: 1000 });

  useEffect(() => {
    springCount.on("change", (value) => {
      setDisplayCount(Math.round(value));
    });
    springCount.set(2500);
  }, [springCount]);

  return (
    <div className="relative">
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <span className="text-white/40 text-sm uppercase tracking-wider font-semibold">
          Products Delivered
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight"
      >
        {displayCount}
      </motion.div>
    </div>
  );
};

const LoadingStep3 = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const springCount = useSpring(0, { bounce: 0, duration: 1200 });

  useEffect(() => {
    springCount.on("change", (value) => {
      setDisplayCount(Math.round(value));
    });
    springCount.set(50);
  }, [springCount]);

  return (
    <div className="relative">
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <span className="text-white/40 text-sm uppercase tracking-wider font-semibold">
          Global Clients
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight"
      >
        {displayCount}+
      </motion.div>
    </div>
  );
};

const LoadingStep4 = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const springCount = useSpring(0, { bounce: 0, duration: 1000 });

  useEffect(() => {
    springCount.on("change", (value) => {
      setDisplayCount(Math.round(value));
    });
    springCount.set(99);
  }, [springCount]);

  return (
    <div className="relative">
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <span className="text-white/40 text-sm uppercase tracking-wider font-semibold">
          Customer Satisfaction
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight"
      >
        {displayCount}%
      </motion.div>
    </div>
  );
};

export default LoadingPage;
