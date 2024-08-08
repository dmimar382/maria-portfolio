import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true); // Controls the mobile navbar toggle

    return (
        <header className="top-area">
            <div className="header-area">
                <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" aria-label="Navigation" onClick={() => setIsNavCollapsed(prev => !prev)}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" to="/">Maria Myers</Link>
                        </div>
                        <div className={`collapse navbar-collapse menu-ui-design ${isNavCollapsed ? 'collapse' : 'in'}`}>
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="smooth-menu"><Link to="/about">About</Link></li>
                                <li className="smooth-menu"><Link to="/education">Education</Link></li>
                                <li className="smooth-menu"><Link to="/experience">Experience</Link></li>
                                <li className="smooth-menu"><Link to="/portfolio">Portfolio</Link></li>
                                <li className="smooth-menu"><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
