import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <p>&copy; 2024 Maria Myers. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="scroll-Top">
                <div className="return-to-top">
                    <i className="fa fa-angle-up" id="scroll-top"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
