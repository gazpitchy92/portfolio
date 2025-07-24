import { MdEmail } from 'react-icons/md';

const ContactSection = () => {
  return (
    <>
      <h3 className="clients-header">
        <MdEmail className="client-icon" />
        <span className="client-text">Contact Me</span>
      </h3>
      <section className="intro-text">
        contact@gpitchford.com
      </section>
    </>
  );
};

export default ContactSection;