import { Link } from 'react-router-dom';
import crjrLogo from '../../assets/crjr-ventures-logo.png';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Companies', path: '/companies' },
  { name: 'Work with me', path: '/work-with-me' },
];

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.5 0h-15C1.12 0 0 1.12 0 2.5v15C0 18.88 1.12 20 2.5 20h15c1.38 0 2.5-1.12 2.5-2.5v-15C20 1.12 18.88 0 17.5 0zM6.25 17.5H3.125V7.5H6.25v10zM4.688 6.25c-1.035 0-1.875-.84-1.875-1.875S3.653 2.5 4.688 2.5s1.875.84 1.875 1.875S5.723 6.25 4.688 6.25zM17.5 17.5h-3.125v-5c0-1.19-.023-2.72-1.66-2.72-1.66 0-1.915 1.297-1.915 2.635v5.085H7.675V7.5h3v1.367h.043c.418-.79 1.44-1.622 2.965-1.622 3.17 0 3.757 2.085 3.757 4.797v5.458h.06z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#e5e7eb]">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-10 lg:py-12">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-10">
          {/* Left Side - Logo and Description */}
          <div className="max-w-sm text-center md:text-left">
            <Link to="/" className="inline-block">
              <img
                src={crjrLogo}
                alt="CRJR Ventures"
                className="h-8 md:h-10 w-auto mb-3 md:mb-4 mx-auto md:mx-0 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-[13px] md:text-[14px] text-[#64748b] leading-[1.6] md:leading-[20px]">
              Building brands and scaling companies globally through operational excellence and
              strategic growth.
            </p>
          </div>

          {/* Center - Navigation Links */}
          <div className="text-center md:text-left">
            <h4 className="text-[13px] md:text-[14px] font-semibold text-[#0f172a] mb-3 md:mb-4">Interlinks</h4>
            <ul className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-6">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[13px] md:text-[14px] text-[#475569] hover:text-[#0f172a] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-[13px] md:text-[14px] font-semibold text-[#0f172a] mb-3 md:mb-4">Follow the Journey</h4>
            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
              <a
                href="https://linkedin.com/in/cashrileyjr"
                className="text-[#475569] hover:text-[#0f172a] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                className="text-[#475569] hover:text-[#0f172a] transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="mailto:cashrileyjr@gmail.com"
                className="text-[#475569] hover:text-[#0f172a] transition-colors"
                aria-label="Email"
              >
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-6 md:mt-8 lg:mt-10 pt-5 md:pt-6 lg:pt-8 border-t border-[#e5e7eb]">
          <p className="text-[12px] md:text-[13px] text-[#94a3b8] text-center">
            © 2025 CRJR Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

