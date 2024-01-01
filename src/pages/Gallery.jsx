// Gallery.jsx
import React from 'react';

const Gallery = () => {
  // Replace these URLs with your actual image URLs
  const imageUrls = [
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/6SgH6NQiGAqlUDQS-z4912060050047_d48bd858ceec303a0e4699bb6adfe443.png?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/f0It4b1F5shS4hAc-IMG_6043.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/RpiC8aXP9bgBhRmz-IMG_5682.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/r3kMdZr47uhhUOK8-IMG_5501.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/m7VrrpbXOMqGuPBM-IMG_5928.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/tAQlJhs8ClXMt555-IMG_5507.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/Z3awL0VDgzksfo80-IMG_5469.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/C6HkQwZtwGzbjpb3-IMG_5500.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/YayfupHft0LmF1bi-IMG_6078.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/9aBOD0FWvY4LbV9e-IMG_6047.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/jiTpK0iEnubUYwjU-IMG_5731.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/ZTJfO8lLhy8wZunb-IMG_6108.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/qRLfCAQCOQyOYqG8-IMG_6120.jpeg?w=1000&h=1000',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/uo99AwB55QX9VQOk-IMG_6140.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/o177zOOYK0wN6eXB-IMG_6085.jpeg?w=750&h=750',
    'https://creatorspace.imgix.net/users/clqqs31ci03b1sg01vg067poa/H0EidIqXYJ2RnpyL-IMG_6137.jpeg?w=750&h=750',
    // ... Add more image URLs as needed
  ];

  return (
    <div className="py-16">
      <h3 className="subhead-text animate-entrance">Gallery</h3>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={`gallery-image-${index}`}
            className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-900 transition-transform transform scale-100 hover:scale-105"
          >
            <img
              src={imageUrl}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;