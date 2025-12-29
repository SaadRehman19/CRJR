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
    className="w-4 h-4 text-[#063482] shrink-0 mt-1"
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
    <section className="w-full bg-white py-24 px-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Side - Image with Decorative Borders */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative w-[576px] h-[500px] flex-shrink-0"
          >
            {/* Decorative Corner - Top Left */}
            <div
              className="absolute -top-4 -left-4 w-[96px] h-[96px] border-t-4 border-l-4 border-[#063482] z-20 rounded-tl-[24px]"
            ></div>

            {/* Decorative Corner - Bottom Right */}
            <div
              className="absolute -bottom-4 -right-4 w-[96px] h-[96px] border-b-4 border-r-4 border-[#063482] z-20 rounded-br-[24px]"
            ></div>

            {/* Image Container */}
            <div
              className="relative w-full h-full rounded-[16px] overflow-hidden shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]"
            >
              {/* Main Image from Figma */}
              <img
                src={whoIAmImage}
                alt="Cash Riley Jr."
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-[576px]"
          >
            {/* Section Badge */}
            <div className="flex items-center gap-3 mb-6 h-5">
              <div className="w-8 h-px bg-[#063482]"></div>
              <span className="text-[14px] font-normal text-[#063482] tracking-[0.7px] leading-5">
                Who I Am
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-[36px] font-bold text-[#0f172a] leading-[40px] mb-6">
              Founder. Operator. Growth Strategist.
            </h2>

            {/* Bio Paragraph */}
            <p className="text-[18px] text-[#475569] leading-[30px] mb-8">
              I'm Cash Riley Jr., a founder, operator, and growth strategist who builds high-performance brands across Amazon, retail, and e-commerce. I don't just advise—I build.
            </p>

            {/* Bullet Points */}
            <div className="space-y-7 mb-10">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[16px] text-[#334155] leading-[24px]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="border-l-4 border-[#102a43] bg-[#f8fafc] rounded-tr-[8px] rounded-br-[8px] h-[120px] flex items-center px-6">
              <p className="text-[16px] text-[#475569] leading-[24px] font-normal italic text-center w-full">
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

