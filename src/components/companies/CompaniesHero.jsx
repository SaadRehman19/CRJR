import { motion } from 'framer-motion';
import Button from '../ui/Button';
import companiesHeroImage from '../../assets/My_companies.png';
import mcmLogo from '../../assets/mcm-logo.png';
import crjrPartnersLogo from '../../assets/crjr-partners-logo.png';
import { Link } from 'react-router-dom';

const CompaniesHero = () => {
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
    <section className="relative w-full pt-[20px] pb-12 md:pb-[96px] px-6 md:px-12 lg:px-20 overflow-hidden bg-[#f8fafc]">
      {/* Background decorations */}
      <div className="absolute top-[-80px] right-[1136px] w-[384px] h-[384px] bg-[#eff6ff] opacity-50 rounded-full -z-10"></div>
      <div className="absolute top-[416px] right-[-110px] w-[341px] h-[323px] opacity-20 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
          {/* Left Content - appears first on mobile, left on desktop */}
          <motion.div
            className="order-1 flex-1 max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <span className="w-2 h-2 bg-[#063482] rounded-full" />
              <span className="text-[13px] md:text-[14px] font-medium text-[#486581]">
                CRJR Ventures
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.2] md:leading-tight lg:leading-[72px] tracking-tight md:tracking-[-2.3px] mb-1 md:mb-2">
              <motion.span variants={itemVariants} className="block text-[#0f172a]">
                Building & Scaling
              </motion.span>
              <motion.span variants={itemVariants} className="block text-[#063482]">
                Marketplace Empires
              </motion.span>
            </h1>

            {/* Decorative Line */}
            <motion.div variants={itemVariants} className="flex">
              <div className="mt-2 md:mt-[6px] h-[4px] md:h-[5px] w-[120px] md:w-[192px] rounded-[9.6px] mb-4 md:mb-6" style={{ backgroundColor: '#BFDBFE' }}></div>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-[15px] md:text-[18px] text-[#475569] leading-[1.6] md:leading-[30px] mb-6 md:mb-8">
              A proven ecosystem of companies generating over $40MM in revenue through strategic
              marketplace dominance, innovative brand building, and operational excellence.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mb-0 md:mb-10">
              <Link to="/work-with-me#contact-form" className="w-full md:w-auto inline-block">
                <Button variant="primary" className="w-full md:w-auto justify-center">
                  Start Your Growth Assessment
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Box - appears below on mobile, right on desktop */}
          <motion.div
            className="order-2 flex flex-1 relative justify-center lg:justify-end w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[400px] lg:max-w-[500px]">
              {/* Blue glow behind image */}
              <div
                className="absolute rounded-[12px] lg:rounded-[18px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.4) 0%, rgba(14, 165, 233, 0.3) 100%)',
                  filter: 'blur(40px)',
                  width: '100%',
                  height: '100%',
                  top: '20px',
                  left: '0',
                  zIndex: 0,
                }}
              ></div>

              {/* Main image container */}
              <div
                className="relative bg-white rounded-[12px] lg:rounded-[18px] overflow-hidden z-10 shadow-xl"
              >
                <img
                  src={companiesHeroImage}
                  alt="CRJR Ventures"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesHero;

