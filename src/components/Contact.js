import React, { useState } from 'react';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);  // New state to track if the message is for success or error

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        setModalMessage('Message Received! I will be in touch soon.');
        setIsSuccess(true);
        setShowModal(true);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setModalMessage('Failed to send message. Please try again later.');
      setIsSuccess(false);
      setShowModal(true);
    }
  };

  return (
    <section id="contact" className="contact-footer">
      <div className="section-heading text-center">
        <h2>Contact Me</h2>
      </div>
      <div className="container">
        <div className="contact-content">
          {showModal && (
            <div className="modal-background">
              <div className="modal-container">
                <h4>{isSuccess ? 'Success' : 'Error'}</h4>
                <p>{modalMessage}</p>
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-form">
                  <form id="contact-form" onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id="name" placeholder="Name*" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input type="email" className="form-control" id="email" placeholder="Email*" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id="subject" placeholder="Subject*" name="subject" value={formData.subject} onChange={handleChange} required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea className="form-control" rows="8" id="comment" placeholder="Message*" name="message" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-contact-btn">
                          <button type="submit" value="Submit" className="contact-btn">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div id="confirmationMessage"></div>
                </div>
              </div>
            </div>
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-adress">
                  <div className="contact-add-head">
                    <h3>Maria Myers</h3>
                    <p>Backend Software Developer</p>
                  </div>
                  <div className="contact-add-info">
                    <div className="single-contact-add-info">
                      <h3>Phone</h3>
                      <p>979-446-5230</p>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>Email</h3>
                      <p>dmimar382@gmail.com</p>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>Profiles</h3>
                      <div className="row profiles">
                        <div className="col-xs-6">
                        <div className="single-profile profile-no-border">
                            <div className="profile-txt">
                            <a href="https://github.com/dmimar382" target="_blank" aria-label="Github-Link" rel="noopener noreferrer">
                                <i className="flaticon-github-logo"></i>
                            </a>
                            <div className="profile-icon-name">Github</div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xs-6">
                        <div className="single-profile profile-no-border">
                            <div className="profile-txt">
                            <a href="https://www.linkedin.com/in/maria-dmit/" target="_blank" aria-label="Linkedin-Link" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin" style={{ fontSize: "36px" }}></i>
                            </a>
                            <div className="profile-icon-name">LinkedIn</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
