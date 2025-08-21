import { MdEmail } from 'react-icons/md';

const ContactSection = () => {
  return (
    <>
      <h3 className="clients-header">
        <MdEmail className="client-icon" />
        <span className="client-text">Contact Me</span>
      </h3>
      <section className="intro-text">
        <strong>Email - </strong>contact@gpitchford.com<br></br>
        <strong>Phone - </strong>07435005377
      </section>
    </>
  );
};

export default ContactSection;