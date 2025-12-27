import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import HeroBadge from './HeroBadge';
import PartnerLogos from './PartnerLogos';

const HeroContent = () => {
  return (
    <div className="w-full">
      {/* Badge */}
      <HeroBadge />
      
      {/* Main Headline */}
      <h1 className="mt-6 text-[72px] font-bold leading-[72px] tracking-[-2.3px]">
        <span className="block text-[#0f172a]">Building Brands.</span>
        <span className="block text-[#0f172a]">Scaling Companies.</span>
        <span className="block">
          <span
            className="bg-gradient-to-r from-[#1B9DD9] via-[#1B9DD9] to-[#063482] bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(217.881deg, #1B9DD9 9.2171%, #063482 83.039%)' }}
          >
            Creating Opportunity.
          </span>
        </span>
      </h1>

      {/* Decorative underline */}
      <div className="flex justify-center">
        <div className="mt-[6px] h-[5px] w-[192px] rounded-[9.6px]" style={{ backgroundColor: '#BFDBFE' }}></div>
      </div>
      
      {/* Description */}
      <p className="mt-6 text-[#475569] text-[18px] leading-[30px]">
        The official portfolio of entrepreneur and brand-builder Cash Riley Jr. — showcasing the companies I own, the brands I've built, and the documented success behind each venture.
      </p>
      
      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/work-with-me#contact-form" className="hidden md:block">
        <Button variant="primary">
          Start Your Growth Assessment
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
        </Link>
          <Link to="/work-with-me#contact-form" className="hidden md:block">
        <Button variant="outline">
          See If You Qualify
        </Button>
        </Link>
      </div>
      
      {/* Partner Logos */}
      <PartnerLogos />
    </div>
  );
};

export default HeroContent;

