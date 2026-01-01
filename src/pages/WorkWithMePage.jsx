import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WorkWithMeHero } from '../components/WorkWithMeHero';
import { DocumentedSuccess } from '../components/DocumentedSuccess';
import { WhoIAm } from '../components/WhoIAm';
import { StrategiesProven } from '../components/StrategiesProven';
import { HowWeCanWorkTogether } from '../components/HowWeCanWorkTogether';
import { OperatingFromRealResults } from '../components/OperatingFromRealResults';
import { PartnershipOpportunities } from '../components/PartnershipOpportunities';
import { ContactSection } from '../components/ContactSection';
import { ReadyToScale } from '../components/ReadyToScale';

const WorkWithMePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-form') {
      // Small delay to ensure the page has fully rendered
      setTimeout(() => {
        const isMobile = window.innerWidth < 768;

        // On mobile, scroll directly to the form card
        const targetElement = isMobile
          ? document.getElementById('send-message-form')
          : document.getElementById('contact-form');

        if (targetElement) {
          if (isMobile) {
            // On mobile, scroll to the form card with offset for better visibility
            const yOffset = -20; // Small offset for spacing
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          } else {
            // On desktop, use default scroll behavior to section
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <WorkWithMeHero />
      <StrategiesProven />
      <OperatingFromRealResults />

		      <DocumentedSuccess />
		      <WhoIAm />
	      <HowWeCanWorkTogether />
	      <PartnershipOpportunities />
      <ContactSection />
      <ReadyToScale />
    </>
  );
};

export default WorkWithMePage;

