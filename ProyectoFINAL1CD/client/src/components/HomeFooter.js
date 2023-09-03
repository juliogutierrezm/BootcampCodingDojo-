import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <footer className="bg-dark text-white text-center p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              Nomad Solutions is a technology company specializing in innovative solutions for your needs.
            </p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>
              <FaEnvelope  className="mr-4 fs-3 p-1" />
              info@nomadsolutions.com
            </p>
            <p>
              <FaPhone className="mr-2 fs-3 p-1" />
              +123-456-7890
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h5>Technologies Used</h5>
            <ul className="list-inline">
            <li className="list-inline-item">HTML</li>
            <li className="list-inline-item">CSS</li>
            <li className="list-inline-item">Javascript</li>
              <li className="list-inline-item">React</li>
              <li className="list-inline-item">Node.js</li>
               <li className="list-inline-item">Express</li>
               <li className="list-inline-item">MongoDB</li>
              <li className="list-inline-item">Mongoose</li>
              <li className="list-inline-item">Bootstrap</li>
              {/* ... Add more technologies 156E90 FDFDFD */}
            </ul>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-12">
            <a href="https://github.com/nomadsolutions" target="_blank" rel="noopener noreferrer" className="text-white fs-3 mr-3">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/company/nomadsolutions" target="_blank" rel="noopener noreferrer" className="text-white fs-3 mr-3">
              <FaLinkedin/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
