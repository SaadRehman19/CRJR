import Button from "../ui/Button";
import growthPlanIcon from '../../assets/lets_build_growth_plan.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ReadyToScale = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-20 border-t border-[#e5e7eb]">
      <div className="max-w-[1216px] mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-[26px] md:text-[32px] lg:text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-4 md:mb-6"
        >
          Ready to Scale?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[15px] md:text-[16px] lg:text-[18px] text-[#475569] leading-[1.6] max-w-2xl mx-auto mb-6 md:mb-8 lg:mb-10 px-4"
        >
          Whether you're looking for strategic advisory, partnership opportunities, or want to
          discuss an acquisition, I'm always open to the right conversation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Button */}
          <Link to="/work-with-me#contact-form" className="w-full sm:w-auto flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto justify-center">
                <img src={growthPlanIcon} alt="" className="w-5 h-5" />
                Let's Build Your Growth Plan
              </Button>
            </motion.div>
          </Link>

          {/* Secondary Button */}
          <motion.a
            href="https://linkedin.com/in/cashrileyjr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: "#0EA5E9" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0f172a] rounded-[30px] font-bold text-[14px] md:text-[16px] border-2 border-[#e5e7eb] hover:bg-gray-50 transition-colors"
          >
            <img src={linkedinIcon} alt="" className="w-5 h-5" />
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyToScale;

