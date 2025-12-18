import mcmLogo from '../../assets/mcm-logo.png';
import crjrPartnersLogo from '../../assets/crjr-partners-logo.png';
import tmaLogo from '../../assets/tma-logo.png';

const PartnerLogos = () => {
  return (
    <div className="mt-16">
      <p className="text-[14px] leading-[30px] text-[#475569] mb-4">Our Partner logos</p>
      <div className="flex items-center gap-8">
        <img src={tmaLogo} alt="TMA" className="h-[44.779px] object-contain" />
        <img src={mcmLogo} alt="MCM Nutrition" className="h-[59.939px] object-contain" />
        <img src={crjrPartnersLogo} alt="CRJR Partners" className="h-[40.075px] object-contain" />
      </div>
    </div>
  );
};

export default PartnerLogos;

