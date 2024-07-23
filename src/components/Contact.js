import React from 'react';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
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
        <section id="contact" className="contact">
            <div className="section-heading text-center">
                <h2>contact me</h2>
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
                                                    <button type="submit" className="contact-btn">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div id="confirmationMessage"></div>
                                    <script src="https://smtpjs.com/v3/smtp.js"></script>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-offset-1 col-md-5 col-sm-6">
                            <div className="single-contact-box">
                                <div className="contact-address">
                                    <div className="contact-add-head">
                                        <h3>Maria Myers</h3>
                                        <p>backend software developer</p>
                                    </div>
                                    <div className="contact-add-info">
                                        <div className="single-contact-add-info">
                                            <h3>phone</h3>
                                            <p>979-446-5230</p>
                                        </div>
                                        <div className="single-contact-add-info">
                                            <h3>email</h3>
                                            <p>mvmyers@gmail.com</p>
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
