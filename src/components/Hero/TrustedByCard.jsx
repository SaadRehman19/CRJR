import { motion } from 'framer-motion';
import person1 from '../../assets/trusted-person-1.png';
import person2 from '../../assets/trusted-person-2.png';
import person3 from '../../assets/trusted-person-3.png';

const TrustedByCard = () => {
  return (
    <motion.div
      className="absolute bottom-[30px] md:bottom-[50px] left-[30px] md:left-[50px] bg-white rounded-[10px] md:rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] h-[55px] md:h-[72.74px] w-[180px] md:w-[264.51px] flex items-center px-[12px] md:px-[18.74px] gap-[8px] md:gap-[13px] z-10"
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
    >
      {/* Avatar Stack - person images */}
      <div className="flex -space-x-1.5 md:-space-x-2 flex-shrink-0">
        <div className="w-[26px] md:w-[35.268px] h-[26px] md:h-[35.268px] rounded-full border-[1.5px] md:border-[2.204px] border-white overflow-hidden">
          <img src={person1} alt="Person 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-[26px] md:w-[35.268px] h-[26px] md:h-[35.268px] rounded-full border-[1.5px] md:border-[2.204px] border-white overflow-hidden">
          <img src={person2} alt="Person 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-[26px] md:w-[35.268px] h-[26px] md:h-[35.268px] rounded-full border-[1.5px] md:border-[2.204px] border-white overflow-hidden">
          <img src={person3} alt="Person 3" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[10px] md:text-[13.225px] leading-tight md:leading-[17.634px] text-[#475569] font-normal whitespace-nowrap">Trusted by top</p>
        <p className="text-[10px] md:text-[13.225px] leading-tight md:leading-[17.634px] text-[#475569] font-normal whitespace-nowrap">brands</p>
      </div>
    </motion.div>
  );
};

export default TrustedByCard;

