import { motion } from 'framer-motion';
import dashboardImage from '../../assets/hero-dashboard.png';
import RevenueCard from './RevenueCard';
import TrustedByCard from './TrustedByCard';

const HeroDashboard = () => {
  return (
    <motion.div
      className="relative w-full max-w-[678px] h-auto aspect-[678/500] mx-auto"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Decorative shadow layer behind - subtle gray */}
      <div className="absolute top-0 left-[7.6%] w-[95.2%] h-[106.2%] opacity-10 rounded-[26.451px] bg-gray-300"></div>

      {/* Main container with overflow */}
      <div className="absolute top-[-4.7%] left-[3.4%] w-full max-w-[687px] h-auto aspect-[687/655] rounded-[17.634px] overflow-hidden shadow-[0px_27.553px_55.106px_0px_rgba(0,0,0,0.25)] bg-white">
        {/* Revenue Card - positioned absolutely */}
        <RevenueCard />

        {/* Main Dashboard Image */}
        <div className="relative w-full h-full p-2 sm:p-4">
          <img
            src={dashboardImage}
            alt="Dashboard Preview"
            className="w-full h-full object-contain"
          />

          {/* Trusted By Card - positioned absolutely */}
          <TrustedByCard />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroDashboard;

