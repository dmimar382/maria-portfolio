import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Profiles from './components/Profiles';
import Contact from './components/Contact';
import WelcomeHero from './components/WelcomeHero';
import Home from './components/Home';

import './styles/css/style.css';
import './styles/css/responsive.css';
import './styles/css/animate.css';
import './styles/css/bootsnav.css';
import './styles/css/bootstrap.min.css';
import './styles/css/flaticon.css';
import './styles/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'animate.css/animate.min.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <WelcomeHero />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/profiles" element={<Profiles />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Contact />
            </div>
        </Router>
    );
};

export default App;
