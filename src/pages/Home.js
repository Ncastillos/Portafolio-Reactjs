import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faLinkedin , faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <section className="home">
            <div>
            <h1>Soy Nestor Castillo.</h1>
            <p>Soy un <strong>Contador Público</strong> especializado en Finanzas e impuestos</p>
            <div ClassName="social-links">
                <a href="https//facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https//linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https//github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
            </div>
        </section>
    );
}

export default Home;