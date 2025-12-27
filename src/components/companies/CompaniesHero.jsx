import Button from '../ui/Button';
import companiesHeroImage from '../../assets/My_companies.png';
import mcmLogo from '../../assets/mcm-logo.png';
import crjrPartnersLogo from '../../assets/crjr-partners-logo.png';
import { Link } from 'react-router-dom';

const CompaniesHero = () => {
  return (
    <section className="relative w-full pt-[20px] pb-[96px] px-20 overflow-hidden bg-[#f8fafc]">
      {/* Background decorations */}
      <div className="absolute top-[-80px] right-[1136px] w-[384px] h-[384px] bg-[#eff6ff] opacity-50 rounded-full -z-10"></div>
      <div className="absolute top-[416px] right-[-110px] w-[341px] h-[323px] opacity-20 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#063482]"></div>
              <span className="text-[14px] font-normal text-[#063482] tracking-[0.7px]">
                CRJR Venture Partners
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[72px] font-bold leading-[72px] tracking-[-2.3px] mb-2">
              <span className="block text-[#0f172a]">Building & Scaling</span>
              <span className="block text-[#063482]">Marketplace Empires</span>
            </h1>

            {/* Decorative Line */}
            <div className="flex">
              <div className="mt-[6px] h-[5px] w-[192px] rounded-[9.6px] mb-6" style={{ backgroundColor: '#BFDBFE' }}></div>
            </div>

            {/* Description */}
            <p className="text-[18px] text-[#475569] leading-[30px] mb-8">
              A proven ecosystem of companies generating over $40MM in revenue through strategic
              marketplace dominance, innovative brand building, and operational excellence.
            </p>

            {/* CTA Button */}
            <div className="mb-10">
              <Link to="/work-with-me#contact-form" className="w-full sm:w-auto inline-block">
                <Button variant="primary" className="w-full sm:w-auto">
                  Start Your Growth Assessment
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>

          
          </div>

          {/* Right Side - Image Box */}
          <div className="flex-1 relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Blue glow behind image */}
              <div
                className="absolute rounded-[18px]"
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
                className="relative bg-white rounded-[18px] overflow-hidden z-10"
                style={{
                  maxWidth: '500px',
                }}
              >
                <img
                  src={companiesHeroImage}
                  alt="CRJR Ventures"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesHero;

