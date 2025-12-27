import aunerPetLogo from '../../assets/auner-logo.png';
import iconJointHealth from '../../assets/joint_health.svg';
import iconMealToppers from '../../assets/daily_meal.svg';
import iconSeniorPet from '../../assets/senior_pet_support.svg';
import iconImmuneSupport from '../../assets/immune_support.svg';
import iconFunctionalTreats from '../../assets/functional_treats.svg';

// Market focus categories
const marketFocus = ['Dogs', 'Cats'];

// Product portfolio items
const products = [
  {
    title: 'Joint Health',
    description: 'Advanced supplements for mobility and comfort',
    icon: iconJointHealth,
  },
  {
    title: 'Daily Meal Toppers',
    description: 'Nutritional enhancement for every meal',
    icon: iconMealToppers,
  },
  {
    title: 'Senior Pet Support',
    description: 'Specialized care for aging companions',
    icon: iconSeniorPet,
  },
  {
    title: 'Immune Support',
    description: 'Boosting natural defenses and vitality',
    icon: iconImmuneSupport,
  },
  {
    title: 'Functional Treats',
    description: 'Emerging product line combining taste and health',
    icon: iconFunctionalTreats,
  },
];

const AunerPetCard = () => {
  return (
    <div
      className="bg-white rounded-[30px] border border-[#F3F4F6] overflow-hidden"
      style={{
        boxShadow: '0px 20px 25px 0px rgba(0, 0, 0, 0.1), 0px 8px 10px 0px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Header (Dark Background) */}
        <div className="bg-[#102A43] p-8 lg:w-[45%] flex flex-col">
          {/* Logo Box */}
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 bg-white overflow-hidden">
            <img src={aunerPetLogo} alt="AUNER Pet Inc. Logo" className="w-25 h-25" />
          </div>

          {/* Company Name */}
          <h3 className="text-[28px] font-bold text-white mb-2">AUNER Pet Inc.</h3>

          {/* Tagline */}
          <p className="text-sm text-white/70 mb-4">
            Pet Wellness | Supplements & Senior<br />Support
          </p>

          {/* Description */}
          <p className="text-sm text-white/80 leading-relaxed mb-6">
            Dedicated pet category company focused on creating premium, health-forward 
            products for dogs and cats. Built on the same proven systems used across the portfolio.
          </p>

          {/* Market Focus Section */}
          <div className="pt-4 border-t border-white/10 mt-auto">
            <p className="text-sm text-white/80 mb-3">Market Focus</p>
            <div className="flex gap-4">
              {marketFocus.map((animal, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    {animal === 'Dogs' ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 3.5C6.5 3.5 4 6 4 9.5C4 11.5 5 13 6 14V16.5C6 17 6.5 17.5 7 17.5H8C8.5 17.5 9 17 9 16.5V15H11V16.5C11 17 11.5 17.5 12 17.5H13C13.5 17.5 14 17 14 16.5V14C15 13 16 11.5 16 9.5C16 6 13.5 3.5 10 3.5Z"/>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 4C7 4 5 6.5 5 9C5 11 6 12.5 7 13.5V16C7 16.5 7.5 17 8 17H12C12.5 17 13 16.5 13 16V13.5C14 12.5 15 11 15 9C15 6.5 13 4 10 4ZM8 9C7.5 9 7 8.5 7 8C7 7.5 7.5 7 8 7C8.5 7 9 7.5 9 8C9 8.5 8.5 9 8 9ZM12 9C11.5 9 11 8.5 11 8C11 7.5 11.5 7 12 7C12.5 7 13 7.5 13 8C13 8.5 12.5 9 12 9Z"/>
                      </svg>
                    )}
                  </span>
                  <span className="text-white font-medium">{animal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Product Portfolio (White Background) */}
        <div className="p-8 lg:w-[55%] flex flex-col">
          {/* Product Portfolio Title */}
          <h4 className="text-2xl font-bold text-[#0F172A] mb-6">Product Portfolio</h4>

          {/* Product Items - Grid Layout */}
          <div className="grid grid-cols-2 gap-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-3 rounded-xl border border-[#E5E7EB]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <img src={product.icon} alt="" className="w-8 h-8 shrink-0" />
                  <span className="text-sm font-semibold text-[#0F172A]">{product.title}</span>
                </div>
                <p className="text-xs text-[#4B5563] ml-10">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AunerPetCard;

