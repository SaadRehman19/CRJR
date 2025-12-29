import Button from "../ui/Button";
import growthPlanIcon from "../../assets/lets_build_growth_plan.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import { Link } from 'react-router-dom';

const ReadyToScaleCTA = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-20 border-t border-[#e5e7eb]">
      <div className="max-w-[1216px] mx-auto text-center">
        {/* Headline */}
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f172a] leading-tight md:leading-[40px] mb-4 md:mb-6">
          Ready to Scale?
        </h2>

        {/* Description */}
        <p className="text-[15px] md:text-[18px] text-[#475569] leading-[1.6] md:leading-[30px] max-w-2xl mx-auto mb-8 md:mb-10 px-4 md:px-0">
          Whether you're looking for strategic advisory, partnership
          opportunities, or want to discuss an acquisition, I'm always open to
          the right conversation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4 max-w-md md:max-w-none mx-auto">
          {/* Primary Button */}
          <Link to="/work-with-me#contact-form" className="w-full md:w-auto">
            <Button variant="primary" className="w-full md:w-auto justify-center text-[15px] md:text-[16px]">
              <img src={growthPlanIcon} alt="" className="w-4 h-4 md:w-5 md:h-5" />
              Let's Build Your Growth Plan
            </Button>
          </Link>

          {/* Secondary Button */}
          <a
            href="https://linkedin.com/in/cashrileyjr"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-[#0f172a] rounded-[30px] font-bold text-[15px] md:text-[16px] border-2 border-[#e5e7eb] hover:bg-gray-50 transition-colors"
          >
            <img src={linkedinIcon} alt="" className="w-4 h-4 md:w-5 md:h-5" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToScaleCTA;
