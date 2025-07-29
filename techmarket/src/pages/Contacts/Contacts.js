import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { t } from '../../utils/translations';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './Contacts.css';

const Contacts = () => {
  const { language } = useSelector(state => state.app);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = {
    phone: '+7 (999) 123-45-67',
    email: 'info@techmarket.com',
    address: language === 'ru' ? 'г. Москва, ул. Примерная, д. 1' : '1 Example Street, Moscow',
    workingHours: language === 'ru' ? 'Пн-Пт: 9:00 - 18:00' : 'Mon-Fri: 9:00 AM - 6:00 PM'
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = t('required', language);
    }
    if (!formData.email.trim()) {
      errors.email = t('required', language);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = t('invalidEmail', language);
    }
    if (!formData.subject.trim()) {
      errors.subject = t('required', language);
    }
    if (!formData.message.trim()) {
      errors.message = t('required', language);
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Очищаем ошибку при вводе
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Имитация отправки формы
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 3000);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contacts-page">
      {/* Hero Section */}
      <section className="contacts-hero">
        <div className="container">
          <div className="contacts-hero-content">
            <h1 className="contacts-hero-title">{t('contactUs', language)}</h1>
            <p className="contacts-hero-subtitle">
              {language === 'ru' 
                ? 'Мы всегда рады помочь вам и ответить на все ваши вопросы'
                : 'We are always happy to help you and answer all your questions'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <FaPhone />
              </div>
              <h3>{t('phoneNumber', language)}</h3>
              <p>{contactInfo.phone}</p>
            </div>
            
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <FaEnvelope />
              </div>
              <h3>{t('emailAddress', language)}</h3>
              <p>{contactInfo.email}</p>
            </div>
            
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <FaClock />
              </div>
              <h3>{t('workingHours', language)}</h3>
              <p>{contactInfo.workingHours}</p>
            </div>
            
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <FaMapMarkerAlt />
              </div>
              <h3>{language === 'ru' ? 'Адрес' : 'Address'}</h3>
              <p>{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <h2>{t('sendMessage', language)}</h2>
            
            {submitSuccess && (
              <div className="success-message">
                {language === 'ru'
                  ? 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
                  : 'Message sent successfully! We will contact you soon.'
                }
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('name', language)}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('email', language)}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('subject', language)}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={formErrors.subject ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('message', language)}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? 'error' : ''}
                  disabled={isSubmitting}
                  rows="5"
                />
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? (language === 'ru' ? 'Отправка...' : 'Sending...')
                  : t('sendMessage', language)
                }
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3886953345473!2d37.618705!3d55.751244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzA0LjUiTiAzN8KwMzcnMDcuMyJF!5e0!3m2!1sen!2sru!4v1627894567890!5m2!1sen!2sru"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="TechMarket Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts; 