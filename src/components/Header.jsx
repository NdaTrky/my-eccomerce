import React from 'react';

function Header() {
    const navLinks = [
        {href: "#", text: "Home"},
        {href: "#", text: "Shop"},
        {href: "#", text: "About"},
        {href: "#", text: "Blog"},
        {href: "#", text: "Contact"},
        {href: "#", text: "Pages"},
]



  return (
     <div className='flex flex-row items-center justify-between'>

      <div>
        <a className="text-2xl font-bold flex items-center" href="#">Bandage</a>
         </div>
        <div>
            <ul>
                {navLinks.map((link) => {
                   <li key={link.text}>
                    <a href={link.href} className=''>{link.text}
                   </a>
                   </li> 
                })}
            </ul>
        </div>

        <div className='flex-row gap-5'>
         <a href=""><i class="fa-regular fa-user"></i></a>
         <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
         <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
         <a href=""><i class="fa-solid fa-bars"></i></a>
         </div>
         
    </div>
   
  );
}

export default Header;
