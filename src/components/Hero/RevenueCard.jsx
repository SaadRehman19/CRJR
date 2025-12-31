import { motion } from 'framer-motion';
import revenueIcon from '../../assets/revenue-icon.svg';

const RevenueCard = () => {
  return (
    <motion.div
      className="absolute top-[30px] md:top-[49.6px] right-[30px] md:right-[66px] z-20"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-[8px] md:rounded-[13.225px] shadow-[0px_4.408px_6.613px_0px_rgba(0,0,0,0.1),0px_11.021px_16.532px_0px_rgba(0,0,0,0.1)] border border-[#f1f5f9] w-[130px] md:w-[189.548px] h-[60px] md:h-[85.966px] flex items-center px-[10px] md:px-[17.63px] gap-[8px] md:gap-[12px]">
        <div className="w-[24px] md:w-[35.268px] h-[24px] md:h-[35.268px] rounded-[6px] md:rounded-[8.817px] bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
          <svg className="w-3 md:w-5 h-3 md:h-4" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9L10 1L1 9M3 7V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[9px] md:text-[13.225px] leading-tight md:leading-[17.634px] text-[#64748b] font-normal whitespace-nowrap">Revenue Growth</p>
          <p className="text-[11px] md:text-[15.43px] leading-tight md:leading-[22.042px] text-[#0f172a] font-semibold whitespace-nowrap">+124% YoY</p>
        </div>
      </div>
    </motion.div>
  );
};

export default RevenueCard;

