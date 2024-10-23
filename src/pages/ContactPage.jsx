import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

const contactInfo = {
  title: "Get in touch today!",
  subtitle: "We'd love to hear from you! Let's talk about how we can help bring your ideas to life.",
  phone: "+420 336 775",
  fax: "+420 336 775",
  email: "info@example.com",
  address: "123 Main St, City",
  socialMedia: [
    { name: "Twitter", url: "https://x.com/?lang=tr", icon: "fa-brands fa-twitter" },
    { name: "Facebook", url: "https://www.facebook.com/", icon: "fa-brands fa-facebook" },
    { name: "LinkedIn", url: "https://tr.linkedin.com/", icon: "fa-brands fa-linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/", icon: "fa-brands fa-instagram" }
  ],
  services: [
    { 
      title: "Phone", 
      icon: "fa-solid fa-phone", 
      description: "+420 336 775", 
      text: "Get Support",
      link: "Submit Request", 
      href: "tel:+420336775",
      
    },
    { 
      title: "Address", 
      icon: "fa-solid fa-location-dot", 
      description: "123 Main St, City", 
      text: "Get Support",
      link: "Submit Request", 
      href: "https://www.google.com/maps/search/?api=1&query=123+Main+St,+City",
      
    },
    { 
      title: "Email", 
      icon: "fa-regular fa-envelope", 
      description: "info@example.com", 
      text: "Get Support",
      link: "Submit Request", 
      href: "mailto:info@example.com",
      
    },
  ],
  ctaTitle: "Let's Talk",
  ctaButtonText: "Try It Free Now",
  image: "/contact1.png.png",
}

function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-8 md:py-16">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="md:w-1/2">
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{contactInfo.title}</h1>
                <p className="text text-lg mb-8 my-10">{contactInfo.subtitle}</p>

                <div className="mb-8">
                  <p className="font-bold my-10">Phone: {contactInfo.phone}</p>
                  <p className="font-bold my-10">Fax: {contactInfo.fax}</p>
                </div>

                <div className="flex space-x-4 mx-10 my-10">
                  {contactInfo.socialMedia.map((social, index) => (
                    <a key={index} href={social.url} className="text-gray-600 hover:text-blue-600">
                      <i className={`${social.icon} text-2xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
                <img 
                  src={contactInfo.image} 
                  alt="Family shopping" 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            We help small businesses with big ideas
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 justify-items-center">
            {contactInfo.services.map((service, index) => (
              <div key={index} className={`${service.bgColor} py-6 px-6 rounded-lg shadow-md w-full max-w-sm text-center`}>
                <i 
                  className={`${service.icon} text-blue text-6xl pb-6 ${service.bgColor === 'bg-blue-900' ? 'text-white' : 'text-blue-600'} mb-4`}
                ></i>
                <h3 
                  className="font-bold"
                >
                  {service.title}
                </h3>
                <p>{service.description}</p>
                <p className="font-bold my-5">{service.text}</p>
                <Button 
                  variant="contact"
                  size="sm"
                >
                <a href={service.href} target="_blank" rel="noopener noreferrer">{service.link}</a>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{contactInfo.ctaTitle}</h2>
            <Button 
              variant="secondary"
              size="lg"
              asChild
            >
              <Link to="/contact">{contactInfo.ctaButtonText}</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ContactPage