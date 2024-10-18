import React from 'react';
import ProductCard from '../components/ui/ProductCard'; 

const products = [
  {
    image: 'https://s3-alpha-sig.figma.com/img/2a2d/cc86/6e19165f854d8ad6ea22db2c70a489f8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BhCpnv6UcxfAPmHhJLtO~p7Tdgy1gjE4D-ZE-qNW6V7gJWX~QLtM9H1VFBwja~Sk1M8Oke3MMrCi-HamGrmMH0TiQ6C7J3uDPb-bbA8pKStSPmGKkpqFFtPXiE6e55g4FL-M-eSL9Ve4PfUPf2~gi2DeP12A3JCdpmAF27T07QpsmyUeGRySGkiAhvEtZLkO1tcRaWO4ULi2XqEOZv4fyzWfd90j-Y4~SFeurIYF00nTEwDFvdEDZRPq2EP1TQk1OMPzWuanGJfMJ0U5G6bCod4aSLrNB6L3gYb0qU1yOIkmRwV569EZKgkqM9E9l7bHjk0jE6FabucOST3uT-1xbA__',
    description: 'Your Space',
    title: 'Unique Life',
    text: 'Explore Items',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/c8ab/3a82/34e95a157586711065a45229598852e3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GQsGWBzYOkj1SHndGq~yXiZgQsPeOB7syyeZiw8JUB97azryETaF20BLmS-iQmOkDMZE5EtE5fOGLWB-Ehs1abfh65Rw-8pL0-Uw0DomHOqSn1ZxFGNAOF~Ma2Mn2r09skcLCQ0-XGwnbAPXOJJRl99CL4iWOOJbv35D6AOtGukIrHrvUTn6u3NVIvXqOBWyUTmPNRH~5P3OCpN9un0CP17~QdQM8BL2cvYErZW3qoaLXJ-3KeXstdsTBFmNs2iP4T2IpR9UMXaaGy3GbaVSbv6kwKqE8GG9KvtiMOiIG3f2HgEQFbBzpC5wcjp0CxrOlyaZVNTElt-bvSYguRXWDQ__',
    description: 'Ends Today',
    title: 'Elements Style',
    text: 'Explore Items',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/9da4/35bc/81f8160b963532c03d0f3f84bf89c4ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cbp6aDDqPQiETb614A0w39rg56Nj9L7SmbQfnY8sCMGU0VITI4zyXGZWk0KaTj2eViGl7~ofQjpD2ciQDFTJLn0oR2ZikLFBDjldkFsVXqK6WDolxpKCsaBgvdn7DaQxk6Xe9Ar6uJ1UGCPkbFUE2NvzetUKU06O31dpSBjvrXKVjVgQ2z7NOiDNZfUHe2hKW85MaSzrCDvT8If0leKQxQmUkz3rsSVp0l66J4yZedZDjaKxlrXnrHuW7sOJSla7-3nLGBD-AUmNqQYFvoLxs8gZ8tcCfDnHkt5mmGAOirvW3Bd5BqtDD~6fMvfTmuTdH7epazGJFO3IoFw8dNwYbw__',
    description: 'Ends Today',
    title: 'Elements Style',
    text: 'Explore Items',
  },
  
];

const ProductList = () => {
  return (
    <div className="bg-[#FAFAFA] p-6 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
          text={product.text}
        />
      ))}
    </div>
  );
};

export default ProductList;