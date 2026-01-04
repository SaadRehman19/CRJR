import whoIAmImage from '../../assets/who-i-am-figma.png';
import { motion } from 'framer-motion';

const bulletPoints = [
  'The companies I own and operate daily',
  "The tangible results I've achieved for my portfolio",
  'The systems and processes that scale brands reliably',
  'The opportunities available for strategic partnership',
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4 md:w-5 md:h-5 text-[#063482] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const WhoIAm = () => {
  return (
    <section className="w-full bg-white pt-12 md:pt-16 lg:pt-24 pb-6 md:pb-8 lg:pb-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Side - Image with Decorative Borders - Appears above on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-1 relative w-full max-w-[400px] mx-auto lg:mx-0 h-[350px] sm:h-[400px] lg:w-[576px] lg:h-[500px] flex-shrink-0"
          >
            {/* Decorative Corner - Top Left */}
            <div
              className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 w-[60px] h-[60px] lg:w-[96px] lg:h-[96px] border-t-4 border-l-4 border-[#063482] z-20 rounded-tl-[16px] lg:rounded-tl-[24px]"
            ></div>

            {/* Decorative Corner - Bottom Right */}
            <div
              className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 w-[60px] h-[60px] lg:w-[96px] lg:h-[96px] border-b-4 border-r-4 border-[#063482] z-20 rounded-br-[16px] lg:rounded-br-[24px]"
            ></div>

            {/* Image Container */}
            <div
              className="relative w-full h-full rounded-[12px] lg:rounded-[16px] overflow-hidden shadow-[0px_15px_30px_0px_rgba(0,0,0,0.2)] lg:shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]"
            >
              {/* Main Image from Figma */}
              <img
                src={whoIAmImage}
                alt="Cash Riley Jr."
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Content - Appears below on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-2 flex-1 w-full lg:w-[576px]"
          >
            {/* Section Badge */}
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-2 h-2 bg-[#063482] rounded-full"></div>
              <span className="text-[13px] md:text-[14px] font-medium text-[#063482] tracking-[0.7px]">
                Who I Am
              </span>
            </div>

            {/* Main Headline */}
            <h8 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-4 md:mb-6">
              About Cash Riley Jr.
            </h8>

             <h2 className="text-[28px] md:text-[32px] lg:text-[26px] text-[#0f172a] leading-[1.2] mb-4 md:mb-6">
              Entrepreneur. Operator. Growth Strategist.
            </h2>

            {/* Bio Paragraph */}
            <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#475569] leading-[1.7] mb-6 md:mb-8">
              I'm Cash Riley Jr., a founder, operator, and growth strategist who builds high-performance brands across Amazon, retail, and e-commerce. I don't just advise—I build.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4 md:space-y-5 lg:space-y-7 mb-8 md:mb-10">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[14px] md:text-[15px] lg:text-[16px] text-[#334155] leading-[1.6]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="border-l-4 border-[#102a43] bg-[#f8fafc] rounded-tr-[8px] rounded-br-[8px] min-h-[100px] md:h-[120px] flex items-center px-4 md:px-6 py-4">
              <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#475569] leading-[1.6] font-normal italic w-full">
                "My experience spans multiple categories including health & wellness, pet care, protective wear, and marketplace management — all supported by real, documented results."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;

