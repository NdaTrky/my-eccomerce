import React from 'react';
import TeamMember, { contactData } from '../components/ui/TeamMember';
import { Button } from '@/components/ui/button.jsx';
function AboutPages() {
  const pageContent = {
    about: {
      title: "ABOUT US",
      description: "We know how large objects will act, but things on a small scale",
      image: "/aboutus.png",
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
      imageAlt: "Dağ Gölü"
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
    <div className="container mx-auto px-4">
      {/* Hakkımızda Bölümü */}
      <section className="py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-start space-y-4">
          <h1 className="text-4xl font-bold">{pageContent.about.title}</h1>
          <p className="text text-lg max-w-15">{pageContent.about.description}</p>
          <div>
            <Button size="sm" variant="secondary">Get Quote Now</Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={pageContent.about.image} 
            alt={pageContent.about.imageAlt} 
            className="w-full" 
            style={{ width: '400px', height: 'auto' }} 
          />
        </div>
      </section>

      {/* Trying Bölümü */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-red mb-4">{pageContent.trying.title}</h2>
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
              <p className="text-3xl md:text-4xl font-bold">{pageContent.trying.description}</p>
            </div>
            <hr className="border-gray-300 w-full md:w-auto md:h-auto my-4 md:my-0 md:mx-8" />
            <div className="w-full md:w-1/2 md:pl-8">
              <p className="text-gray-600">{pageContent.trying.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler Bölümü */}
      <section className="py-16 flex flex-col md:flex-row justify-around bg-gray-100">
        {pageContent.stats.map((stat, index) => (
          <div key={index} className="text-center mb-4 md:mb-0">
            <h2 className="text-3xl font-bold">{stat.number}</h2>
            <p className="text-gray-600">{stat.text}</p>
          </div>
        ))}
      </section>

      {/* Video Bölümü */}
      <section className="py-16 flex justify-center">
        <img src={pageContent.video.image} alt={pageContent.video.imageAlt} className="w-full rounded-lg shadow-lg" style={{ width: '500px', height: 'auto' }} />
        <div className="relative">
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full p-4">
            <i className="fas fa-play"></i>
          </button>
        </div>
      </section>

      {/* Ekibimizle Tanışın Bölümü */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{pageContent.team.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactData.teamMembers.slice(0, 3).map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Work With Us Bölümü */}
      <section className="py-12 md:py-24 bg-blue-500 text-white relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            {/* Workwithus.png fotoğrafı mobil ve web'de ortak */}
            <img 
              src="/workwithus.png" 
              alt="Woman in pink sweater" 
              className="w-full h-auto object-cover"
            />
            {/* İkinci resim sadece web görünümde */}
            <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full">
              <img 
                src="/workwithus1.png" 
                alt="Second image" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Yazılar ve Buton - Hem mobil hem de web görünüm için ortak */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-md md:max-w-sm px-4 md:px-0">
                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">{pageContent.workWithUs.subtitle}</h3>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{pageContent.workWithUs.title}</h2>
                <p className="text-sm md:text-base mb-4 md:mb-6">{pageContent.workWithUs.description}</p>
                <Button size="sm" variant="secondary">{pageContent.workWithUs.buttonText}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Büyük Şirketler Bölümü */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{pageContent.companies.title}</h2>
        <p className="text text-center">{pageContent.companies.description}</p>
      </section>
    </div>
  );
}

export default AboutPages;
