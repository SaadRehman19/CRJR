import dashboardImage from '../../assets/hero-dashboard.png';
import RevenueCard from './RevenueCard';
import TrustedByCard from './TrustedByCard';

const HeroDashboard = () => {
  return (
    <div className="relative w-[678px] h-[500px]">
      {/* Decorative shadow layer behind - subtle gray */}
      <div className="absolute top-0 left-[51.7px] w-[646px] h-[531px] opacity-10 rounded-[26.451px] bg-gray-300"></div>

      {/* Main container with overflow */}
      <div className="absolute top-[-32px] left-[23px] w-[687px] h-[655px] rounded-[17.634px] overflow-hidden shadow-[0px_27.553px_55.106px_0px_rgba(0,0,0,0.25)] bg-white">
        {/* Revenue Card - positioned absolutely */}
        <RevenueCard />

        {/* Main Dashboard Image */}
        <div className="relative w-full h-full p-4">
          <img
            src={dashboardImage}
            alt="Dashboard Preview"
            className="w-full h-full object-contain"
          />

          {/* Trusted By Card - positioned absolutely */}
          <TrustedByCard />
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;

