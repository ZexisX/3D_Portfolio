// About.jsx
import 'react-vertical-timeline-component/style.min.css';
import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { CTA } from '../components';
import { skills } from '../constants';
import Gallery from './Gallery.jsx';

const About = () => {
  useEffect(() => {
    anime({
      targets: '.animate-entrance',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
    });
  }, []);


  return (
    <section className="max-container animate-entrance">
      <h1 className="head-text">
        Hello, I'm{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Le Vinh Khang
        </span>{' '}
        <span className="hand-icon" role="img" aria-label="Waving Hand">
          👋
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        He’s a student from Vietnam, living in Ho Chi Minh City. The blog is documentation about his programming journey, running on Amazon Hosting. He loves learning web technology, but he often forgets, and that's why he's writing.
        </p>
      </div>

      <div className="py-10 flex flex-col animate-entrance">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20 glow animate-entrance" key={skill.name}>
              <div className="btn-back rounded-xl glow" />
              <div className="btn-front rounded-xl flex justify-center items-center glow">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Gallery component */}
      <Gallery />

      <hr className="border-slate-200" />

      {/* Add CTA component */}
      <CTA />
    </section>
  );
};

export default About;
