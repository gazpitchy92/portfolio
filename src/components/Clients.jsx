import { FaHandshake } from 'react-icons/fa';

const ClientsSection = () => {
  return (
    <>
      <h3 className="clients-header">
        <FaHandshake className="client-icon" />
        <span className="client-text">Previous Experience</span>
      </h3>
      <div className="companies">
        <img src="/clients/unhcr.png" alt="UNHCR" />
        <img src="/clients/nhs-logo.png" alt="NHS" />
        <img src="/clients/avon.png" alt="Avon and Summerset Police" />
        <img src="/clients/ofg.png" alt="Outcomes First Group" />
        <img src="/clients/laf.png" alt="Lowe and Fletcher" />
        <img src="/clients/alertive.png" alt="Alertive" />
      </div>
    </>
  );
};

export default ClientsSection;