"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website - NextJS",
    description:
      "Next.js portfolio showcasing my skills and projects, delivering a seamless and interactive user experience.",
    image: "/images/projects/1.webp",
    gitUrl: "https://github.com/amannkumar25/myPortfolio-nextjs",
    previewUrl: "https://my-portfolio-nextjs-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Crafted a dynamic and responsive portfolio using HTML, CSS, and JavaScript to showcase skills and projects with a focus on simplicity and user engagement.",
    image: "/images/projects/2.webp",
    gitUrl: "https://github.com/amannkumar25/my-portfolio",
    previewUrl: "https://amannkumar25.github.io/my-portfolio/",
  },
  {
    id: 3,
    title: "Dice Game",
    description:
      "Developed an interactive dice game using React, adding an engaging twist to classic gameplay",
    image: "/images/projects/3.webp",
    gitUrl: "https://github.com/amannkumar25/dice_game",
    previewUrl: "https://dice-game2-20nl.onrender.com",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "Designed and implemented a weather app utilizing API integration, providing real-time weather updates with a user-friendly interface using HTML, CSS, and JavaScript",
    image: "/images/projects/4.webp",
    gitUrl: "https://github.com/amannkumar25/weather_app",
    previewUrl: "https://amannkumar25.github.io/weather_app/",
  },
  {
    id: 5,
    title: "ToDo List",
    description:
      "Built a dynamic and responsive Todo List application using Next.js, combining the power of React ",
    image: "/images/projects/5.webp",
    gitUrl: "https://github.com/amannkumar25/todoList-nextjs",
    previewUrl: "https://todo-list-nextjs-eta.vercel.app/",
  },
  {
    id: 6,
    title: "Spotify Clone",
    description:
      "Crafted a minimalist Spotify clone using HTML, CSS, and JavaScript, offering a simplified user interface for music playback and exploration.",
    image: "/images/projects/6.webp",
    gitUrl: "https://github.com/amannkumar25/spotifyClone",
    previewUrl: "https://amannkumar25.github.io/spotifyClone/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 ">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgURL={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
