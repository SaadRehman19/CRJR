import Button from '../ui/Button';
import avatarImage from '../../assets/who-i-am-main.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const StatBar = ({ label, value, progress }) => (
  <div className="space-y-1.5">
    <div className="flex items-center justify-between text-[11px] md:text-xs text-[#64748B]">
      <span className="text-[11px] md:text-[12px]">{label}</span>
      <span className="font-semibold text-[#0A0E27] text-[13px] md:text-[14px]">{value}</span>
    </div>
    <div className="w-full h-1.5 md:h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-[#0F172A] to-[#0F172A]"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const ProfileStatsCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="bg-white rounded-xl md:rounded-2xl border border-[#E5E7EB] p-4 md:p-5 lg:p-6 w-full"
    style={{ boxShadow: '0px 25px 50px rgba(15, 23, 42, 0.18)' }}
  >
    {/* Header with avatar and status */}
    <div className="flex items-center justify-between mb-5 md:mb-6">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-[#E5E7EB]">
          <img
            src={avatarImage}
            alt="Cash Riley Jr."
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-[13px] md:text-sm font-semibold text-[#0F172A]">Cash Riley, Jr.</p>
          <p className="text-[11px] md:text-xs text-[#94A3B8]">Founder &amp; Operator</p>
        </div>
      </div>
      <span className="px-2.5 md:px-3 py-1 rounded-full bg-[#10B981] text-white text-[10px] md:text-[11px] font-medium">
        Available
      </span>
    </div>

    {/* Stats */}
    <div className="space-y-3 md:space-y-4">
      <StatBar label="Active Companies" value="6+" progress={100} />
      <StatBar label="Client Revenue Generated" value="$40M+" progress={90} />
      <StatBar label="Years of Experience" value="10+" progress={92} />
    </div>
  </motion.div>
);

const WorkWithMeHero = () => {
  return (
    <section
      className="relative w-full pt-[20px] pb-[32px] md:pb-[36px] px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #e0f2fe 0%, #f0f9ff 30%, #ffffff 70%)'
      }}
    >
      {/* Background decoration - decorative orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#bae6fd] opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#dbeafe] opacity-40 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
          {/* Left Side - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1
                }
              }
            }}
            className="flex-1 max-w-xl"
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center gap-2 mb-4 md:mb-0"
            >
              <span className="w-2 h-2 bg-[#063482] rounded-full" />
              <span className="text-[13px] md:text-sm font-medium text-[#486581]">CRJR Venture Partners</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="mt-4 md:mt-6 text-[32px] md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="block text-[#000000]">Why Work </span>
              <span className="block">
                <span className="bg-gradient-to-r from-[#063482] to-[#0EA5E9] bg-clip-text text-transparent">
                  With Me?
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="mt-4 md:mt-6 text-[15px] md:text-base lg:text-lg text-[#475569] leading-[1.6] md:leading-relaxed"
            >
              Everything I do is built on documented success, not theory. I don&apos;t just consult —
              I build, own, and operate the companies behind the results.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="mt-6 md:mt-8"
            >
              <Link to="/work-with-me#contact-form" className="w-full md:w-auto inline-block">
                <Button variant="primary" className="w-full md:w-auto justify-center">
                  Work with me
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Stats Card */}
          <div className="w-full lg:flex-1 lg:flex lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <ProfileStatsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMeHero;
