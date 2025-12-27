import emailIcon from '../../assets/email.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import instaIcon from '../../assets/insta.svg';

const contactMethods = [
  {
    id: 1,
    label: 'Email',
    description: '',
    value: 'info@crjrventures.com',
    type: 'email',
    url: null,
  },
  {
    id: 2,
    label: 'LinkedIn',
    description: 'linkedin.com/in/cashrileyjr',
    value: null,
    type: 'linkedin',
    url: 'https://linkedin.com/in/cashrileyjr',
  },
  {
    id: 3,
    label: 'Instagram',
    description: '@cashrileyjr',
    value: null,
    type: 'instagram',
    url: 'https://instagram.com/cashrileyjr',
  },
];

const expectations = [
  'Response within 24–48 hours',
  'Initial consultation to understand your needs',
  'Customized strategy proposal',
  'Clear next steps and timeline',
];

const ContactIcon = ({ type }) => {
  let icon;

  if (type === 'linkedin') {
    icon = linkedinIcon;
  } else if (type === 'instagram') {
    icon = instaIcon;
  } else {
    icon = emailIcon;
  }

  return <img src={icon} alt="" className="w-7 h-7" />;
};

const CheckBullet = () => (
  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E0F2FE]">
    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

const PaperPlaneIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 10L16 4L10 16L9 11L4 10Z"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact-form" className="w-full bg-gradient-to-b from-[#F9FBFF] via-white to-[#E0F2FE] py-20 px-6 lg:px-20">
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left: Intro + contact methods */}
        <div>
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#0F172A] leading-[1.15] mb-4">
            Let&apos;s Discuss What We Can Build Together
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#475569] leading-[1.7] max-w-xl mb-8">
            Ready to take your business to the next level? Reach out and let&apos;s explore how we can
            create exceptional results together.
          </p>

          <div className="space-y-5 mb-8">
            {contactMethods.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center">
                  <ContactIcon type={item.type} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">{item.label}</p>
                  <p className="text-sm text-[#475569]">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0EA5E9] hover:underline"
                      >
                        {item.description}
                      </a>
                    ) : (
                      item.description
                    )}{' '}
                    {item.value && (
                      <span className="text-[#0EA5E9] font-medium">{item.value}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-4 rounded-[18px] bg-white/90 border border-[#E5E7EB] px-5 py-5 max-w-md"
            style={{ boxShadow: '0px 18px 45px rgba(15, 23, 42, 0.12)' }}
          >
            <p className="text-sm font-semibold text-[#0F172A] mb-3">What to Expect</p>
            <ul className="space-y-2">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#475569]">
                  <CheckBullet />
                  <span className="mt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Form card */}
        <div className="w-full">
          <div
            className="bg-white rounded-[24px] border border-[#E5E7EB] px-6 md:px-8 py-6 md:py-7"
            style={{ boxShadow: '0px 28px 70px rgba(15, 23, 42, 0.18)' }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#0F172A] mb-4">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#0F172A]">Full Name *</label>
                <input
                  type="text"
                  placeholder="Cash Riley, Jr."
                  className="w-full rounded-lg border border-[#E2E8F0] px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#0F172A]">Email Address *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-[#E2E8F0] px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#0F172A]">Company Name</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full rounded-lg border border-[#E2E8F0] px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#0F172A]">Service Interest</label>
                <div className="relative">
                  <select
                    className="w-full appearance-none rounded-lg border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="brand-advisory">Brand Advisory</option>
                    <option value="amazon-consulting">Amazon Consulting</option>
                    <option value="growth-roadmap">Growth Roadmap</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#94A3B8]">
                    ▼
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#0F172A]">Message *</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project and goals..."
                  className="w-full rounded-lg border border-[#E2E8F0] px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  id="contact-consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-[#CBD5E1] text-[#0EA5E9] focus:ring-[#0EA5E9]"
                />
                <label htmlFor="contact-consent" className="text-[11px] leading-snug text-[#64748B]">
                  I agree to be contacted regarding my inquiry and understand that my information will
                  be handled according to the privacy policy.
                </label>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold text-white"
                style={{
                  background:
                    'linear-gradient(264deg, rgba(27, 157, 217, 1) 0%, rgba(6, 52, 130, 1) 97%)',
                  boxShadow: '0px 18px 45px rgba(15, 23, 42, 0.3)',
                }}
              >
                <span>Send Message</span>
                <PaperPlaneIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

