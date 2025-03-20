import React from 'react';
import profileImage from "../assets/banner_joancompany.png"
import links from '../links';
import IosShareIcon from '@mui/icons-material/IosShare';

const BioCard = () => {
    return (
       <div className="bio-card">
          <div className="share-language">
             <div className="share">
                <button
                   href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.example.com"
                   className="share-link"
                >
                   <IosShareIcon/>
                </button>
             </div>
          </div>
          <div className="pic-shadow"></div>
          <img
             src={profileImage}
             alt="Falcon Image"
             className="bio-card-image"
          />
          <div className="bio-card-content">
             <h2 className="bio-card-name">Joan Company</h2>
             <p className="bio-card-description">Professional Drone Pilot</p>
          </div>
          <div className="bio-card-links">
             {links.map((link, index) => (
                <a key={index} href={link.link} className="bio-card-link">
                   <link.icon />
                </a>
             ))}
          </div>
          <div className="bio-links-cards">
             {links.map((link, index) => (
                <a href={link.link} key={index} className="bio-link-card">
                   <link.icon className="bio-link-card-icon" />
                   <p className='bio-link-card-name'>
                      {link.name}
                   </p>
                </a>
             ))}
          </div>
       </div>
    );
};

export default BioCard;