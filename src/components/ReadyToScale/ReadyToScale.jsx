import Button from "../ui/Button";
import growthPlanIcon from '../../assets/lets_build_growth_plan.svg';
import linkedinIcon from '../../assets/linkedin.svg';

const ReadyToScale = () => {
  return (
    <section className="w-full bg-white py-24 px-20 border-t border-[#e5e7eb]">
      <div className="max-w-[1216px] mx-auto text-center">
        {/* Headline */}
        <h2 className="text-[36px] font-bold text-[#0f172a] leading-[40px] mb-6">
          Ready to Scale?
        </h2>

        {/* Description */}
        <p className="text-[18px] text-[#475569] leading-[30px] max-w-2xl mx-auto mb-10">
          Whether you're looking for strategic advisory, partnership opportunities, or want to
          discuss an acquisition, I'm always open to the right conversation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <Button variant="primary">
            <img src={growthPlanIcon} alt="" className="w-5 h-5" />
            Let's Build Your Growth Plan
          </Button>

          {/* Secondary Button */}
          <a
            href="https://linkedin.com/in/cashrileyjr"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0f172a] rounded-[30px] font-bold text-[16px] border-2 border-[#e5e7eb] hover:bg-gray-50 transition-colors"
          >
            <img src={linkedinIcon} alt="" className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToScale;

