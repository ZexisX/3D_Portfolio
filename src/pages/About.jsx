import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CTA } from "../components";
import { skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const education = [
  {
    title: "Bachelor's Degree in Computer Science",
    school: "Your University",
    date: "2010 - 2013",
    icon: "path-to-university-icon",
    iconBg: "#your-color",
    points: [
      "Studied Computer Science with a focus on software development.",
      "Participated in various coding projects and team collaborations.",
    ],
  },
  {
    title: "Master's Degree in Software Engineering",
    school: "Another University",
    date: "2014 - 2016",
    icon: "path-to-another-university-icon",
    iconBg: "#another-color",
    points: [
      "Specialized in Software Engineering and advanced coding techniques.",
      "Thesis on cutting-edge technologies in the software industry.",
    ],
  },
  {
    title: "Ph.D. in Computer Science",
    school: "Yet Another University",
    date: "2017 - 2020",
    icon: "path-to-yet-another-university-icon",
    iconBg: "#yet-another-color",
    points: [
      "Conducted research in Artificial Intelligence and Machine Learning.",
      "Published several research papers in top-tier conferences.",
    ],
  },
  {
    title: "Post-Doctoral Research",
    school: "Research Institute",
    date: "2021 - 2023",
    icon: "path-to-research-institute-icon",
    iconBg: "#research-institute-color",
    points: [
      "Continued research in cutting-edge areas of Computer Science.",
      "Collaborated with international researchers and contributed to projects.",
    ],
  },
];

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Le Vinh Khang
        </span>{" "}
        <span className='hand-icon' role='img' aria-label='Waving Hand'>
          👋
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Education</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I pursued my education to build a strong foundation in Computer
            Science. Here are the details:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {education.map((edu, index) => (
              <VerticalTimelineElement
                key={edu.school}
                date={edu.date}
                iconStyle={{ background: edu.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={edu.icon}
                      alt={edu.school}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: edu.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {edu.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {edu.school}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {edu.points.map((point, index) => (
                    <li
                      key={`education-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      {/* Add CTA component */}
      <CTA />
    </section>
  );
};

export default About;
