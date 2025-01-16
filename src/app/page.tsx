"use client";

import Image from "next/image";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import { ExperienceType, ProjectType } from "./types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const experiences: ExperienceType[] = [
  {
    date: "02/2024 - 05/2024",
    title: "Software Development Intern - imagiLabs",
    link: "https://imagilabs.com/",
    description: [
      "Developed an OpenAI debugging assistant to help users identify and resolve coding errors",
      "Led the full feature lifecycle, including development, testing, iterative improvements, troubleshooting, and platform integration",
    ],
  },
  {
    date: "01/2023 - 01/2024",
    title: "Business and Technology Development Intern - Seak",
    link: "https://www.linkedin.com/company/seak-ai/",
    description: [
      "Streamlined supplier onboarding processes and maintained effective communication with business partners",
      "Managed the company's website and social media platforms to enhance its online presence",
      "Contributed to testing and provided feedback on the team's multilingual product-uploading AI software, ensuring its optimal functionality and user satisfaction",
    ],
  },
  {
    date: "08/2023 - 12/2023",
    title: "Introduction to Computer Programming Learning Assistant",
    link: "/",
    description: [
      "Facilitated 200 students' understanding of Python coding concepts and techniques through in-class support",
      "Held weekly office hours, providing guidance to individual learning needs and offering support with course content",
    ],
  },
];

const projects: ProjectType[] = [
  {
    title: "Soundtrack",
    link: "/",
    description:
      "A full-stack application that allows users to reminisce the past in the form of their favorite songs. Users can add songs with dates and descriptions to create a personal music journal. Users can also view other profiles, making it a common space for music enthusiasts.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel"],
  },
  {
    title: "Darkspace",
    link: "https://github.com/n30w/Darkspace",
    description:
      "A semester-long prject for my Software Engineering class. Darkspace is an academic management platform, connecting teachers and students through features like creating virtual classrooms, posting announcements, and submitting assignments",
    tech: ["Next.js", "Tailwind CSS", "Go", "PostgreSQL", "Docker"],
  },
  {
    title: "Kitchen Cache",
    link: "https://github.com/reesedychiao/kitchen-cache",
    description:
      "A web-based pantry management system designed to help users track grocery lists, pantry items, and save recipes. Built as a frontend practice project using Next.js and Tailwind CSS, with a focus on clean design and usability.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
  },
];

const skills = {
  "PROGRAMMING LANGUAGES": ["Python", "JavaScript", "TypeScript", "C"],
  "WEB DEVELOPMENT": [
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Jekyll",
  ],
  DATABASES: ["MongoDB", "PostgreSQL", "MySQL"],
  "CLOUD & DEVOPS": ["AWS", "Docker", "PM2"],
  "DATA ANALYSIS & VISUALIZATION": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "Seaborn",
  ],
};

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex bg-stone-50">
      <div className="fixed bottom-10 left-10">
        <a href="https://www.linkedin.com/in/reese-dychiao-20b3791b1/">
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={50}
            height={50}
            className="mb-2"
          ></Image>
        </a>
        <a href="https://github.com/reesedychiao">
          <Image
            src="/git.png"
            alt="GitHub"
            width={40}
            height={40}
            className="ml-1 mb-2"
          ></Image>
        </a>
        <a href="reesedychiao@nyu.edu">
          <Image
            src="/email.png"
            alt="Email"
            width={50}
            height={50}
            className="mb-2"
          ></Image>
        </a>
        <div className="border-l-2 w-2 h-40 border-gray-700 ml-6 mt-2"></div>
      </div>
      <div data-aos="fade-up" className="ml-60 mr-52 mt-64">
        <h1 className="flex font-lato text-5xl font-[300]">
          Hello!
          <span className="ml-4">👋</span>
        </h1>
        <h2 className="font-lato mt-16 text-4xl mb-14 font-[300] leading-snug w-3/5">
          I'm <span className="font-lato font-bold">Reese Dychiao</span>, a
          software engineer passionate about building functional and creative
          solutions. 👩‍💻
        </h2>
        <h3 className="font-lato text-2xl font-[300]">
          Get in touch 👉
          <a
            href="mailto:reesedychiao@nyu.edu"
            className="font-lato font-[500] ml-4 underline underline-offset-4 decoration-blue-500 decoration-4 hover:decoration-transparent hover:text-blue-500"
          >
            reesedychiao@nyu.edu
          </a>
        </h3>
        <div data-aos="fade-up" className="mt-64 mr-48 flex">
          <h2 className="font-lato font-[900] text-blue-500 mr-24 tracking-widest">
            ABOUT
          </h2>
          <p className="font-lato font-[500] text-md mb-8 leading-10">
            I am currently pursuing a Computer Science major with a Business
            minor at New York University. My interests lie in full-stack web
            development, cloud engineering, and data analysis. In the past, I
            had the opportunity to work with two startups, where I gained
            hands-on experience with the product lifecycle, collaborative
            development, and problem-solving. Outside of tech, I enjoy
            traveling, sketching, swimming, and attending concerts.
          </p>
        </div>
        <div data-aos="fade-up" className="flex my-44">
          <h2 className="font-lato font-[900] text-blue-500 mr-24 tracking-widest">
            SKILLS
          </h2>
          <div className="flex">
            {Object.entries(skills).map(([key, value]) => (
              <div key={key} className="mr-16">
                <h1 className="font-lato font-[700] mb-4 text-fuchsia-600">
                  {key}
                </h1>
                <ul>
                  {value.map((item, index) => (
                    <li key={index} className="flex mt-1">
                      <h2 className="font-lato font-[400] text-sm text-gray-600">
                        <span className="mr-4">•</span>
                        {item}
                      </h2>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-up" className="flex my-32">
          <h2 className="font-lato font-[900] text-blue-500 mr-24 tracking-widest">
            EXPERIENCE
          </h2>
          <div>
            {experiences.map((exp, index) => (
              <Experience key={index} {...exp} />
            ))}
          </div>
        </div>
        <div data-aos="fade-up" className="flex mt-32">
          <h2 className="font-lato font-[900] text-blue-500 mr-36 tracking-widest">
            PROJECTS
          </h2>
          <div>
            {projects.map((proj, index) => (
              <Project key={index} {...proj} />
            ))}
          </div>
        </div>
        <h2 className="font-lato mt-32 mb-16 font-[900] text-blue-500 tracking-widest">
          Developed by Reese Dychiao 2025
          <span className="ml-3 text-xl">🪐</span>
        </h2>
      </div>
    </div>
  );
}
