import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiSend } from 'react-icons/fi';

export default function ContactForm() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', form);
      setSubmitStatus('success');
      setForm({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="glass-form-container">
      <h3 className="form-title">Request a Callback</h3>
      <p className="form-subtitle">I'll get back to you within 24 hours</p>
      
      <form onSubmit={onSubmit} className="glass-form">
        <div className="input-group">
          <FiUser className="input-icon" />
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={onChange}
            required
            className="glass-input"
          />
        </div>
        
        <div className="input-group">
          <FiMail className="input-icon" />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={onChange}
            required
            className="glass-input"
          />
        </div>
        
        <div className="input-group">
          <FiPhone className="input-icon" />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={onChange}
            required
            className="glass-input"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <FiSend className="button-icon" />
              Request Callback
            </>
          )}
        </button>
        
        {submitStatus === 'success' && (
          <div className="status-message success">
            Thank you! I'll contact you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="status-message error">
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}