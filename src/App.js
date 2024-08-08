import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Contact from './components/Contact';

import './styles/css/style.css';
import './styles/css/responsive.css';
import './styles/css/animate.css';
import './styles/css/bootsnav.css';
import './styles/css/bootstrap.min.css';
import './styles/css/flaticon.css';
import './styles/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Blog = lazy(() => import('./components/Blog'));
const Post = lazy(() => import('./components/Post'));
const WelcomeHero = lazy(() => import('./components/WelcomeHero'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                <WelcomeHero />
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:postId" element={<Post />} />
                    </Routes>
                <Contact />
                </Suspense>
            </div>
        </Router>
    );
};

export default App;
