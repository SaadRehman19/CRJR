import HeroContent from './HeroContent';
import HeroDashboard from './HeroDashboard';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[1058px] bg-white overflow-hidden">
      {/* Background decorations - Ellipses from Figma */}
      <div className="absolute top-[-80px] right-[1136px] w-[384px] h-[384px] bg-[#eff6ff] opacity-50 rounded-full -z-10"></div>

      {/* Top right ellipse blur */}
      <div className="absolute top-[416px] right-[-110px] w-[341px] h-[323px] opacity-20 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl"></div>
      </div>

      {/* Bottom left ellipse blur */}
      <div className="absolute top-[1077px] left-[-123px] w-[348px] h-[329px] opacity-20 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl"></div>
      </div>

      {/* Left side ellipse blur */}
      <div className="absolute top-[24px] left-[-256px] w-[253px] h-[283px] opacity-20 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[96px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="w-[568px] pt-[80px]">
            <HeroContent />
          </div>

          {/* Right Dashboard */}
          <div className="flex-1 flex justify-end">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

