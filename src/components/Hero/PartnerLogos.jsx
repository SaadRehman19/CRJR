import { motion } from 'framer-motion';
import mcmLogo from '../../assets/mcm-logo.png';
import crjrPartnersLogo from '../../assets/crjr-partners-logo.png';
import tmaLogo from '../../assets/tma-logo.png';
import aunerLogo from '../../assets/auner-logo.png';

const PartnerLogos = () => {
  const logos = [
    { src: tmaLogo, alt: 'TMA', mobileHeight: 'h-[48px]', desktopHeight: 'md:h-[52px] lg:h-[56px]', extraClasses: 'bg-black rounded-lg md:rounded-xl p-1.5 md:p-2' },
    { src: mcmLogo, alt: 'MCM Nutrition', mobileHeight: 'h-[40px]', desktopHeight: 'md:h-[44px] lg:h-[48px]', extraClasses: '' },
    { src: aunerLogo, alt: 'Auner Pet', mobileHeight: 'h-[54px]', desktopHeight: 'md:h-[60px] lg:h-[62px]', extraClasses: '' },
    { src: crjrPartnersLogo, alt: 'CRJR Partners', mobileHeight: 'h-[40px]', desktopHeight: 'md:h-[44px] lg:h-[48px]', extraClasses: '' },
  ];

  return (
    <div className="mt-8 md:mt-12 lg:mt-16 mb-4 md:mb-0 flex flex-col items-center md:items-start">
      <div className="flex flex-col items-center">
        <motion.p
          className="text-[15px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[30px] text-[#475569] mb-3 md:mb-4 text-center font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Our Partners
        </motion.p>
        <div className="flex items-center justify-center md:justify-start gap-1 md:gap-3 lg:gap-4 flex-wrap">
          {logos.map((logo, index) => (
            <motion.img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.mobileHeight} ${logo.desktopHeight} ${logo.extraClasses} object-contain`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, filter: 'brightness(1.2)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;

