import React from 'react';

const Contact = () => {

  const sendEmail = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    window.Email.send({
      SecureToken: "60b2bddf-3b27-4b1f-8d1d-90ecb242b709",
      To: 'mvmyers382@gmail.com',
      From: "mvmyers382@gmail.com",
      Subject: document.getElementById("subject").value,
      Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Subject: " + document.getElementById("subject").value
        + "<br> Message: " + document.getElementById("comment").value
    }).then(
      message => alert("Message Received! I will be in touch.")
    );
  };

  return (
    <section id="contact" className="contact-footer">
      <div className="section-heading text-center">
        <h2>Contact Me</h2>
      </div>
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-form">
                  <form id="contact-form" onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id="name" placeholder="Name*" name="name" required />
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input type="email" className="form-control" id="email" placeholder="Email*" name="email" required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id="subject" placeholder="Subject*" name="subject" required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea className="form-control" rows="8" id="comment" placeholder="Message*" required></textarea>
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
                        <div className="col-sm-3">
                        <div className="single-profile profile-no-border">
                            <div className="profile-txt">
                            <a href="https://github.com/dmimar382" target="_blank" rel="noopener noreferrer">
                                <i className="flaticon-github-logo"></i>
                            </a>
                            <div className="profile-icon-name">Github</div>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="single-profile profile-no-border">
                            <div className="profile-txt">
                            <a href="https://www.linkedin.com/in/maria-dmit/" target="_blank" rel="noopener noreferrer">
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