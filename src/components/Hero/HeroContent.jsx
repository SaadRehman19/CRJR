import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import HeroBadge from './HeroBadge';
import PartnerLogos from './PartnerLogos';

const HeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="w-full text-center md:text-left"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
        <HeroBadge />
      </motion.div>

      {/* Main Headline */}
      <h1 className="mt-6 text-[34px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.15] md:leading-[72px] tracking-tight">
        <motion.span variants={itemVariants} className="block text-[#0f172a]">
          Building Brands.
        </motion.span>
        <motion.span variants={itemVariants} className="block text-[#0f172a]">
          Scaling Companies.
        </motion.span>
        <motion.span variants={itemVariants} className="block">
          <span
            className="bg-gradient-to-r from-[#1B9DD9] via-[#1B9DD9] to-[#063482] bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(217.881deg, #1B9DD9 9.2171%, #063482 83.039%)' }}
          >
            Creating Opportunity.
          </span>
        </motion.span>
      </h1>

      {/* Decorative underline */}
      <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
        <div className="mt-[6px] h-[5px] w-[192px] rounded-[9.6px]" style={{ backgroundColor: '#BFDBFE' }}></div>
      </motion.div>

      {/* Description */}
      <motion.p variants={itemVariants} className="mt-6 text-[#475569] text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] md:leading-[30px]">
        The official portfolio of entrepreneur and brand-builder Cash Riley Jr. — showcasing the companies I own, the brands I've built, and the documented success behind each venture.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
        <Link to="/work-with-me#contact-form" className="w-full sm:w-auto">
          <Button variant="primary" className="w-full sm:w-auto">
            Start Your Growth Assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </Link>
        <Link to="/work-with-me#contact-form" className="w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            See If You Qualify
          </Button>
        </Link>
      </motion.div>

      {/* Partner Logos */}
      <motion.div variants={itemVariants}>
        <PartnerLogos />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

