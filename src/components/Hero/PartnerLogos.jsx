import { motion } from 'framer-motion';
import mcmLogo from '../../assets/mcm-logo.png';
import crjrPartnersLogo from '../../assets/crjr-partners-logo.png';
import tmaLogo from '../../assets/tma-logo.png';

const PartnerLogos = () => {
  const logos = [
    { src: tmaLogo, alt: 'TMA', height: 'h-[44.779px]' },
    { src: mcmLogo, alt: 'MCM Nutrition', height: 'h-[59.939px]' },
    { src: crjrPartnersLogo, alt: 'CRJR Partners', height: 'h-[40.075px]' },
  ];

  return (
    <div className="mt-8 md:mt-12 lg:mt-16">
      <motion.p
        className="text-[13px] md:text-[14px] leading-[24px] md:leading-[30px] text-[#475569] mb-3 md:mb-4 text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Our Partner logos
      </motion.p>
      <div className="flex items-center justify-center md:justify-start gap-4 md:gap-8">
        {logos.map((logo, index) => (
          <motion.img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-[40px] md:h-[44px] lg:h-[48px] object-contain"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
            whileHover={{ scale: 1.1, filter: 'brightness(1.2)' }}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;

