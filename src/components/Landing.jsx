import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { StarsCanvas } from "./canvas";

// Splash/intro page shown at "/". Structured to match a reference
// portfolio's intro sequence: glow lines fade in above/below a name
// that grows into view via a real CSS line-height animation (see the
// .animate-landing-title keyframes in index.css), framed by your
// existing violet star field instead of the reference's own particle
// system. Clicking Enter navigates to "/home".
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-primary relative'>
      <div className='absolute inset-0 z-0'>
        <StarsCanvas />
      </div>

      <div className='relative z-10 flex flex-col items-center justify-center w-full'>
        <p className='mb-10 animate-landing-fade-in text-secondary text-[14px] uppercase tracking-[4px]'>
          Software Engineer
        </p>

        <div
          className='hidden w-screen h-px md:block animate-landing-fade-left'
          style={{
            background:
              "linear-gradient(to right, rgba(187,134,252,0), rgba(187,134,252,0.6), rgba(187,134,252,0))",
          }}
        />

        <h1
          className='z-10 text-white cursor-default font-black text-[48px] sm:text-[72px] md:text-[110px] whitespace-nowrap animate-landing-title'
          style={{ textShadow: "0 0 40px rgba(187, 134, 252, 0.5)" }}
        >
          Hi, I'm <span className='text-[#BB86FC]'>Eroniction</span>
        </h1>

        <div
          className='hidden w-screen h-px md:block animate-landing-fade-right'
          style={{
            background:
              "linear-gradient(to right, rgba(187,134,252,0), rgba(187,134,252,0.6), rgba(187,134,252,0))",
          }}
        />

        <div className='my-10 text-center animate-landing-fade-in px-6'>
          <p className='text-white-100 text-[14px] sm:text-[16px] max-w-sm md:max-w-md'>
            I build ML-powered systems that solve real problems — from
            distributed infrastructure to production AI.
          </p>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/home")}
          className='border border-[#BB86FC] text-[#BB86FC] hover:bg-[#BB86FC] hover:text-primary transition-colors duration-200 text-[16px] font-semibold px-8 py-3 rounded-full'
        >
          Enter →
        </motion.button>
      </div>
    </div>
  );
};

export default Landing;