import React from 'react';
import TeamMember, { contactData } from '../components/ui/TeamMember';
import Brand from '../components/ui/Brand';
import { Button } from '@/components/ui/button';

function AboutPages() {
  const pageContent = {
    about: {
      title: "ABOUT US",
      description: "We know how large objects will act, but things on a small scale",
      image: "https://i.pinimg.com/originals/c0/5a/61/c05a611855cf5f2e72900f82f43fd288.gif",
      imageAlt: "Alışveriş Yapan Kız"
    },
    trying: {
      title: "Problems trying",
      description: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.",
      text:"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
    },
    stats: [
      { number: "15K", text: "Happy Customers" },
      { number: "150K", text: "Monthly Visitors" },
      { number: "15", text: "Countries Worldwide" },
      { number: "100+", text: "Top Partners" }
    ],
    video: {
      image: "https://i.pinimg.com/originals/cb/b6/ce/cbb6ce30f492e6142377964405e8afe5.gif",
      imageAlt: "gramophone gif"
    },
    team: {
      title: "Meet Our Team"
    },
    companies: {
      title: "Big Companies Are Here",
      description:"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
    },
    workWithUs: {
      subtitle: "WORK WITH US",
      title: "Now Let's grow Yours",
      description: "The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th",
      buttonText: "Button"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">{pageContent.about.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">{pageContent.about.description}</p>
            <Button size="lg" variant="secondary" className="mt-4">Get Quote Now</Button>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={pageContent.about.image} 
              alt={pageContent.about.imageAlt} 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Trying Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-blue-600 font-semibold mb-8">{pageContent.trying.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-4xl font-bold text-gray-900 leading-tight">{pageContent.trying.description}</p>
              </div>
              <div>
                <p className="text-lg text-gray-600 leading-relaxed">{pageContent.trying.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {pageContent.stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <h2 className="text-4xl font-bold text-gray-900">{stat.number}</h2>
                <p className="text-gray-600 font-medium">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={pageContent.video.image} 
              alt={pageContent.video.imageAlt} 
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 m-auto w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <i className="fas fa-play text-xl"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{pageContent.team.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactData.teamMembers.slice(0, 3).map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="bg-blue-600">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://i.pinimg.com/564x/59/ca/02/59ca02897c6a92247e73c74de636e2f6.jpg" 
                  alt="Work With Us" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-black space-y-6">
                <span className="text-sm font-bold tracking-wider">{pageContent.workWithUs.subtitle}</span>
                <h2 className="text-4xl font-bold">{pageContent.workWithUs.title}</h2>
                <p className="text opacity-90">{pageContent.workWithUs.description}</p>
                <Button size="lg" variant="secondary">{pageContent.workWithUs.buttonText}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{pageContent.companies.title}</h2>
            <p className="text text-gray-600 leading-relaxed">{pageContent.companies.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPages;
