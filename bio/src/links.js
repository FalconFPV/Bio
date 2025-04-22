import React from 'react';
import Email from '@mui/icons-material/Email';
import Language from "@mui/icons-material/Language";
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Youtube from '@mui/icons-material/YouTube';

const links = [
   {
      name: "Mail",
      link: "mailto:joan.falconfpv@gmail.com",
      icon: Email,
   },
   {
      name: "Web Portfolio",
      link: "https://falconfpv.github.io/PortfolioFalcon/",
      icon: Language,
   },
   {
      name: "Instagram",
      link: "https://www.instagram.com/falcon_fpv/",
      icon: Instagram,
   },
   {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100023819556799",
      icon: Facebook,
   },
   {
      name: "YouTube",
      link: "https://www.youtube.com/@JoanCompany-FalconFPV",
      icon: Youtube,
   },
];

export default links;