import React from 'react';

const socialMediaIcons = {
  twitter: { icon: "fab fa-twitter", color: "text-blue-400 hover:text-blue-600" },
  facebook: { icon: "fab fa-facebook", color: "text-blue-600 hover:text-blue-800" },
  instagram: { icon: "fab fa-instagram", color: "text-pink-600 hover:text-pink-800" },
  linkedin: { icon: "fab fa-linkedin", color: "text-blue-700 hover:text-blue-900" }
};

export const contactData = {
  mainImage: "/team1.png",
  gridImages: ["/team2.png", "/team3.png", "/team4.png", "/team5.png"],
  teamMembers: [
    { 
      name: "Erhan Fırat", 
      role: "Product Owner", 
      image: "/meetourteam.png",
      socialMedia: {
        twitter: "https://twitter.com/erhanfirat",
        facebook: "https://facebook.com/erhanfirat",
        instagram: "https://instagram.com/erhanfirat",
        linkedin: "https://linkedin.com/in/erhanfirat"
      }
    },
    { 
      name: "Gökhan Özdemir", 
      role: "Scrum Master", 
      image: "/meetourteam1.png",
      socialMedia: {
        twitter: "https://twitter.com/gokhanozdemir",
        facebook: "https://facebook.com/gokhanozdemir",
        instagram: "https://instagram.com/gokhanozdemir",
        linkedin: "https://linkedin.com/in/gokhanozdemir"
      }
    },
    { 
      name: "Nida Türkay", 
      role: "Full Stack Developer", 
      image: "/meetourteam3.png",
      socialMedia: {
        twitter: "https://twitter.com/nidaturkay",
        facebook: "https://facebook.com/nidaturkay",
        instagram: "https://instagram.com/nidaturkay",
        linkedin: "https://linkedin.com/in/nidaturkay"
      }
    },
    { 
      name: "Ayşen Aydın", 
      role: "Front End Developer", 
      image: "/meetourteam2.png",
      socialMedia: {
        twitter: "https://twitter.com/aysenaydin",
        facebook: "https://facebook.com/aysenaydin",
        instagram: "https://instagram.com/aysenaydin",
        linkedin: "https://linkedin.com/in/aysenaydin"
      }
    },
  ]
};

function TeamMember({ name, role, image, socialMedia }) {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4 object-cover" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="flex space-x-4 mt-4">
        {Object.entries(socialMedia).map(([platform, link]) => (
          socialMediaIcons[platform] && (
            <a key={platform} href={link} target="_blank" rel="noopener noreferrer" className={socialMediaIcons[platform].color}>
              <i className={`${socialMediaIcons[platform].icon} fa-lg`}></i>
            </a>
          )
        ))}
      </div>
    </div>
  );
}

export default TeamMember;