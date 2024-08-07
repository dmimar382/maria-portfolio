import React from 'react';

const WelcomeHero = () => {

    return (
        <section id="welcome-hero" className="welcome-hero" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="header-text">
                            <h2>hi <span>,</span> i am <br /> Maria Myers <span>.</span></h2>
                            <p>backend software developer</p>
                            <a href="/Maria_Myers_Resume.pdf" download target="Maria_Myers_Resume.pdf">Download Resume</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeHero;
