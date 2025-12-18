import brandIcon from '../../assets/brand.svg';
import amazonConsultingIcon from '../../assets/amazon_consulting.svg';
import activeCompaniesIcon from '../../assets/active_companies.svg';
import productDevelopmentIcon from '../../assets/product_Development.svg';
import retailIcon from '../../assets/retail_distrubtion.svg';
import revenueIcon from '../../assets/revenue.svg';

const services = [
  {
    id: 1,
    title: 'Brand Advisory',
    description:
      'Strategic guidance for building, positioning, and scaling consumer brands across multiple channels.',
    bullets: [
      'Brand positioning strategy',
      'Market analysis & competitive research',
      'Go-to-market planning',
    ],
    icon: brandIcon,
  },
  {
    id: 2,
    title: 'Amazon Consulting',
    description:
      'Expert guidance on navigating and dominating the Amazon marketplace with proven strategies.',
    bullets: [
      'Listing optimization',
      'PPC campaign management',
      'Brand registry & protection',
    ],
    icon: amazonConsultingIcon,
  },
  {
    id: 3,
    title: 'Marketplace Launch',
    description:
      'End-to-end support for launching products on major e-commerce platforms with maximum impact.',
    bullets: [
      'Platform selection strategy',
      'Launch timeline & execution',
      'Post-launch optimization',
    ],
    icon: activeCompaniesIcon,
  },
  {
    id: 4,
    title: 'Product Development',
    description:
      'From concept to market-ready products with guidance on design, manufacturing, and quality control.',
    bullets: [
      'Product ideation & validation',
      'Supplier sourcing & negotiation',
      'Quality assurance processes',
    ],
    icon: productDevelopmentIcon,
  },
  {
    id: 5,
    title: 'Retail Distribution',
    description:
      'Strategic planning for expanding into retail channels and building sustainable distribution networks.',
    bullets: [
      'Retail partnership development',
      'Distribution network setup',
      'Inventory management systems',
    ],
    icon: retailIcon,
  },
  {
    id: 6,
    title: 'Growth Roadmap',
    description:
      'Comprehensive strategic planning to scale your business efficiently and profitably.',
    bullets: [
      'Revenue forecasting & modeling',
      'Scalable systems development',
      'Team structure & hiring strategy',
    ],
    icon: revenueIcon,
  },
];

const ServiceIcon = ({ icon }) => {
  return <img src={icon} alt="" className="w-6 h-6" />;
};

const CheckBullet = () => (
  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E0F2FE]">
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8.5L6.5 11L12 5.5"
        stroke="#0EA5E9"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ServiceCard = ({ title, description, bullets, icon }) => (
  <div
    className="bg-white rounded-[18px] px-6 py-7 border border-[#E5E7EB] flex flex-col h-full"
    style={{ boxShadow: '0px 18px 45px rgba(15, 23, 42, 0.08)' }}
  >
    <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] flex items-center justify-center mb-5">
      <ServiceIcon icon={icon} />
    </div>
    <h3 className="text-lg md:text-xl font-semibold text-[#0F172A] mb-2">{title}</h3>
    <p className="text-sm text-[#475569] leading-relaxed mb-4 flex-grow">{description}</p>
    <ul className="space-y-2">
      {bullets.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-[#475569]">
          <CheckBullet />
          <span className="mt-0.5">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const HowWeCanWorkTogether = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F8FAFC] via-white to-[#E0F2FE] py-16 md:py-24 px-6 lg:px-20">
      <div className="max-w-[1216px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#0F172A] leading-[1.2] mb-3">
            How We Can Work Together
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#475569] leading-[1.7] max-w-2xl mx-auto">
            I take on selective engagements where I can deliver meaningful value. Let&apos;s explore how we
            can create exceptional results together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              bullets={service.bullets}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeCanWorkTogether;

