import React from 'react';
import { Button } from '../components/ui/button';


const footerContent = {
  heading: "Consulting Agency For Your Business",
  subheading: "The quick fox jumps over the lazy dog.",
  sections: [
    {
      title: "Company Info",
      items: ["About Us", "Carrier", "We are hiring", "Blog"]
    },
    {
      title: "Legal",
      items: ["About Us", "Carrier", "We are hiring", "Blog"]
    },
    {
      title: "Features",
      items: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"]
    },
    {
      title: "Resources",
      items: ["IOS & Android", "Watch a Demo", "Customers", "API"]
    },
    {
      title: "Get In Touch",
      items: [
        { icon: "fa-solid fa-phone", value: "(480) 555-0103" },
        { icon: "fa-solid fa-location-dot", value: "4517 Washington Ave." },
        { icon: "fa-regular fa-envelope", value: "debra.holt@example.com" }
      ]
    }
  ],
  socialMedia: [
   {platform: "facebook" , url: "https://www.facebook.com/"},
   {platform: "instagram", url: "https://www.instagram.com/"},
   {platform: "twitter" , url:  "https://www.twitter.com/"}
  ] 
};

function Footer() {
  return (
    <footer className="footer-container">

  
      <div>
        <h3 className="text-[24px]">{footerContent.heading}</h3>
        <p>{footerContent.subheading}</p>
        <Button size="sm" variant="secondary">Contact Us</Button>
      </div>

      
      <div className="footer-content">
        {footerContent.sections.map((section, index) => (
          
          <div key={index} className="footer-section">
            <h4 className="text-[16px]">{section.title}</h4>
            
            <ul className="footer-section">
              {section.items.map((item, itemIndex) => {
               
                if (typeof item === "object") {
                  return (
                    <li key={itemIndex}>
                      <i className={item.icon}></i> {item.value}
                    </li>
                  );
                }
               
                return (
                  <li key={itemIndex}>
                    <a href="#">{item}</a>
                  </li>
                );
              })}
            </ul>
            
          </div>
        ))}
      </div>

      {/* Alt Kısım: Açıklama Paragrafı ve Sosyal Medya İkonları */}
      <div>
        <div className='flex justify-between'>
        <p> Made With Love By Finland All Right Reserved.</p>

        <div className="flex gap-5">
          {footerContent.socialMedia.map((social, index) => (
            <a key={index} href={social.url} target="_blank">
              <i className={`fa-brands fa-${social.platform}`}></i>
            </a>
          ))}
        </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
