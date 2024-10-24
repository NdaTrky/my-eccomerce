import React from 'react';
import { Link } from 'react-router-dom';

const socialMediaIcons = {
  twitter: { icon: "fab fa-twitter", color: "text-blue-400 hover:text-blue-600" },
  facebook: { icon: "fab fa-facebook", color: "text-blue-600 hover:text-blue-800" },
  instagram: { icon: "fab fa-instagram", color: "text-pink-600 hover:text-pink-800" },
  linkedin: { icon: "fab fa-linkedin", color: "text-blue-700 hover:text-blue-900" }
};

const contactData = {
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

function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Innovation tailored for you</h1>
          
          <div className="flex flex-col md:flex-row mb-12"> 
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="w-full max-w-md">
                <img src={contactData.mainImage} alt="Main" className="object-cover" />
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-1 pt-2">
              {contactData.gridImages.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Grid ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-8">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactData.teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-4 object-cover" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4 mt-4">
                  {Object.entries(member.socialMedia).map(([platform, link]) => (
                    socialMediaIcons[platform] && (
                      <a key={platform} href={link} target="_blank" rel="noopener noreferrer" className={socialMediaIcons[platform].color}>
                        <i className={`${socialMediaIcons[platform].icon} fa-lg`}></i>
                      </a>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div> 
        </section>
      </main>
    </div>
  )
}

export default TeamPage;