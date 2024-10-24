import React from 'react';
import TeamMember, { contactData } from '../components/ui/TeamMember';

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
              <TeamMember key={index} {...member} />
            ))}
          </div> 
        </section>
      </main>
    </div>
  );
}

export default TeamPage;