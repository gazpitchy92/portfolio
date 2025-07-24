import { FaAward } from 'react-icons/fa';

const AwardsSection = () => {
  return (
    <>
      <h3 className="clients-header">
        <FaAward className="client-icon" />
        <span className="client-text">Awards & Recognition</span>
      </h3>
      <div className="companies">
        <a href="https://www.lowe-and-fletcher.co.uk/newsroom/echo-lock-finalist-at-the-mix-awards-2025/">
          <img src="/clients/mixx.png" alt="MIXX" />
        </a>
        <a href="https://www.lowe-and-fletcher.co.uk/newsroom/echo-wins-award/">
          <img src="/clients/sebe.png" alt="SEBE" />
        </a>
        <a href="https://digitalplaybook.co.uk/case_studies/alertive-app-helps-take-pressure-off-nhs-nurses/">
          <img src="/clients/alertive.png" alt="NHS Alertive App" />
        </a>
        <a href="https://www.unrefugees.org.au/our-stories/what-you-need-to-know-about-the-connecting-worlds-app/">
          <img src="/clients/unhcr.png" alt="UNHCR Connecting Worlds App" />
        </a>
      </div>
    </>
  );
};

export default AwardsSection;